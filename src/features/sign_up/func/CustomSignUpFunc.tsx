import { message } from 'antd';
import React from 'react';
import { API_CONFIG } from '../api/func/api_config';
import { useSignUp } from '../api/func/hooks/useSignUp';
import CustomSignUpForm, { CustomSignUpFormData } from '../CustomSignUpForm';

const CustomSignUpFunc: React.FC = () => {
  const { signUp, loading, error } = useSignUp();

  const handleSubmit = async ({ email, password }: CustomSignUpFormData): Promise<void> => {
    try {
      await signUp({ email, password, commandId: API_CONFIG.COMMAND_ID });
      message.success('Success!');
    } catch (err) {
      console.error(JSON.stringify(err));
      throw err;
    }
  };

  return <CustomSignUpForm onSubmit={handleSubmit} isLoading={loading} serverError={error} />;
};

export default CustomSignUpFunc;
