import React, { memo, useEffect, useMemo } from 'react';
import cn from 'clsx';
import { useFormik } from 'formik';
import type { FormikConfig } from 'formik';
import { useMutation } from '@apollo/client';
import { Button, message } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { profileSelectors } from 'src/app/store/profile';

import { UPDATE_PROFILE, UpdateProfileResponse, UpdateProfileVars } from './connection';
import s from './profile_completed_form.module.css';
import { Title } from '../title';
import { ProfileForm, ProfileFormErrors, ProfileFormValues } from '../profile_form';
import { isNotDefinedString } from 'src/utility/validation';
import { createErrorHandlers } from 'src/utility/createErrorHandlers';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(({ className }: ProfileCompletedFormProps) => {
  const profile = useSelector(profileSelectors.get);
  const { t } = useTranslation();
  const [update, { loading }] = useMutation<UpdateProfileResponse, UpdateProfileVars>(UPDATE_PROFILE);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    const { catcherValidator } = createErrorHandlers<keyof ProfileFormValues>(
      (code, _, error) => {
        if (code === null) {
          message.error(t(`errors.${error.message}`));
        } else {
          message.error(t(`errors.${code}`));
        }
      },
      {
        name: ['ERR_INVALID_NICKNAME'],
      }
    );
    return {
      initialValues: {
        name: profile?.name,
        about: profile?.about,
      },
      onSubmit: (values, { setErrors }) => {
        update({ variables: { input: { name: values.name, about: values.about } } })
          .then(() => message.success(t(`screens.ProfileScreen.updateProfile.success`)))
          .catch(catcherValidator({ setErrors, getMessage: (code) => t(`errors.${code}`) }));
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = t(`errors.is_required`);
        }
        return errors;
      },
    };
  }, [profile, t, update]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({ name: profile?.name, about: profile?.about });
  }, [profile, setValues]);

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>{t(`screens.ProfileScreen.updateProfile.title`)}</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary" loading={loading} onClick={submitForm}>
        {t(`screens.ProfileScreen.updateProfile.save`)}
      </Button>
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
