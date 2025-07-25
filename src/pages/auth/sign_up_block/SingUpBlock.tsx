import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { useMutation } from '@apollo/client';
import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { tokenActions } from '../../../app/store/token';
import { profileActions } from '../../../app/store/profile';
import { SIGN_UP, SignUpResponse, SignUpVars, extractSignUp } from '../connections';
import s from './sign_up_block.module.css';
import { AuthFormErrors, AuthFormValues } from '../../../widgets/form/AuthForm/types';
import { isLongEnough, isNotDefinedString } from '../../../utility/validation';
import AuthForm from '../../../widgets/form/AuthForm/AuthForm';
import { createErrorHandlers } from '../../../utility/createErrorHandlers';

export type SingUpBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingUpBlock = memo<SingUpBlockProps>(({ className }: SingUpBlockProps) => {
  const { t } = useTranslation();
  const [signUp, { loading }] = useMutation<SignUpResponse, SignUpVars>(SIGN_UP, { fetchPolicy: 'no-cache' });
  const dispatch = useDispatch();

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>>(() => {
    const { catcher } = createErrorHandlers((code, _, error) => {
      if (code === null) {
        message.error(t(`errors.${error.message}`));
      } else {
        message.error(t(`errors.${code}`));
      }
    });
    return {
      onSubmit: (values, { resetForm }) => {
        signUp({ variables: { email: values.email, password: values.password, commandId: 'strofymova_dev' } })
          .then((res) => {
            const result = extractSignUp(res.data);
            if (result) {
              dispatch(tokenActions.set(result.token));
              dispatch(profileActions.set(result.profile));
            }
            resetForm();
          })
          .catch(catcher);
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          errors.email = t(`errors.is_required`);
        }
        if (isNotDefinedString(values.password)) {
          errors.password = t(`errors.is_required`);
        } else if (!isLongEnough(values.password)) {
          errors.password = t(`errors.too_short_password`);
        }
        return errors;
      },
    };
  }, [dispatch, signUp, t]);

  const formik = useFormik<AuthFormValues>({
    onSubmit,
    initialValues,
    validate,
  });

  const { submitForm } = formik;
  return (
    <div className={cn(s.root, className)}>
      <AuthForm formManager={formik} />
      <div className={s.bottom}>
        <Button className={s.submit} loading={loading} type="primary" onClick={submitForm}>
          {t(`screens.auth.signUp.submit`)}
        </Button>
      </div>
    </div>
  );
});
SingUpBlock.displayName = 'SingUpBlock';
export default SingUpBlock;
