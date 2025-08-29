import React from 'react';
import { getEnvVar, useSignUpMutation } from '../api/react_toolkit_query/features/authApi';
import { ErrorCode, ServerError, ServerErrors, SignUpBody } from '../api/api_types';
import CustomSignUpForm, { CustomSignUpFormData } from '../CustomSignUpForm';
import { message } from 'antd';

const CustomSignUpRTK: React.FC = () => {
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const [serverError, setServerError] = React.useState<string>('');

  React.useEffect(() => {
    if (error) {
      const rtkError = error as ServerErrors;

      if (rtkError.errors?.[0]) {
        const currentError: ServerError = rtkError.errors[0];

        switch (currentError.extensions.code) {
          case ErrorCode.ERR_ACCOUNT_ALREADY_EXIST:
            setServerError('Пользователь с таким email уже существует');
            break;

          case ErrorCode.ERR_INVALID_PASSWORD:
            setServerError(
              'Пароль должен содержать минимум 8 символов и может включать буквы, цифры и специальные символы'
            );
            break;

          case ErrorCode.ERR_FIELD_REQUIRED:
            setServerError(`Обязательное поле: ${currentError.fieldName}`);
            break;

          default:
            setServerError(currentError.message || 'Произошла ошибка при регистрации');
        }
      } else {
        setServerError('Произошла ошибка при регистрации');
      }
    } else {
      setServerError('');
    }
  }, [error]);

  const handleSignUp = async (formData: CustomSignUpFormData): Promise<void> => {
    try {
      setServerError('');
      const signUpData: SignUpBody = {
        email: formData.email,
        password: formData.password,
        commandId: getEnvVar('REACT_APP_COMMAND_ID', 'storybook-s_trofymova_dev'),
      };

      const result = await signUp(signUpData).unwrap();

      if (result) {
        message.success('Success');
      }
    } catch (err) {
      // Ошибка уже обрабатывается в useEffect через error из RTK Query
      console.error('Registration error:', err);
      // setServerError(err);
      // throw err; // Пробрасываем ошибку для обработки в форме
    }
  };

  return (
    <div>
      <CustomSignUpForm onSubmit={handleSignUp} serverError={serverError} isLoading={isLoading} />
    </div>
  );
};

export default CustomSignUpRTK;
