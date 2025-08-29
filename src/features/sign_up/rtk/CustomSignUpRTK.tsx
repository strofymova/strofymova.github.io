import { message } from 'antd';
import React from 'react';
import { useServerError } from '../../../hooks/useServerError';
import { ServerErrors, SignUpBody } from '../api/api_types';
import { useSignUpMutation } from '../api/react_toolkit_query/features/authApi';
import CustomSignUpForm, { CustomSignUpFormData } from '../CustomSignUpForm';

const CustomSignUpRTK: React.FC = () => {
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const serverErrors = error as ServerErrors;
  const serverErrorMessage = useServerError(serverErrors?.errors?.[0]);

  const handleSignUp = async (formData: CustomSignUpFormData): Promise<void> => {
    try {
      const signUpData: SignUpBody = {
        email: formData.email,
        password: formData.password,
        commandId: process.env.REACT_APP_COMMAND_ID,
      };

      const result = await signUp(signUpData).unwrap();

      if (result) {
        message.success('Success');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div>
      <CustomSignUpForm onSubmit={handleSignUp} serverError={serverErrorMessage} isLoading={isLoading} />
    </div>
  );
};

export default CustomSignUpRTK;
