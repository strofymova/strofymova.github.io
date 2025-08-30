import { isFulfilled } from '@reduxjs/toolkit';
import { message } from 'antd';
import React from 'react';
import { useServerError } from '../../../hooks/useServerError';
import { useSignUpThunk } from '../api/redux_thunk/hook/useSignUpThunk';
import CustomSignUpForm, { CustomSignUpFormData } from '../CustomSignUpForm';

const CustomSignUpThunk: React.FC = () => {
  const { signUp, isLoading, error, clearError } = useSignUpThunk();
  const serverErrorMessage = useServerError(error);

  const handleSubmit = async (formData: CustomSignUpFormData): Promise<void> => {
    try {
      clearError();
      const result = await signUp(formData.email, formData.password);
      if (isFulfilled(result)) {
        message.success('Registration successful!');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return <CustomSignUpForm onSubmit={handleSubmit} serverError={true && serverErrorMessage} isLoading={isLoading} />;
};

export default CustomSignUpThunk;
