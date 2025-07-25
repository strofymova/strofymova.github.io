import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { useMutation } from '@apollo/client';
import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { tokenActions } from 'src/app/store/token';
import { profileActions } from 'src/app/store/profile';
import { SIGN_IN, SignInResponse, SignInVars, extractSignIn } from '../connections';
import s from './sing_in_block.module.css';
import { createErrorHandlers } from 'src/utility/createErrorHandlers';
import { AuthFormErrors, AuthFormValues } from 'src/widgets/form/AuthForm/types';
import { isLongEnough, isNotDefinedString } from 'src/utility/validation';
import AuthForm from 'src/widgets/form/AuthForm/AuthForm';

export type SingInBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingInBlock = memo<SingInBlockProps>(({ className }: SingInBlockProps) => {
  const { t } = useTranslation();
  const [signIn, { loading }] = useMutation<SignInResponse, SignInVars>(SIGN_IN, { fetchPolicy: 'no-cache' });
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
        signIn({ variables: { email: values.email, password: values.password } })
          .then((res) => {
            const result = extractSignIn(res.data);
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
  }, [dispatch, signIn, t]);

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
          {t(`screens.auth.signIn.submit`)}
        </Button>
      </div>
    </div>
  );
});

SingInBlock.displayName = 'SingInBlock';
