import { useEffect, useState } from 'react';
import { ErrorCode, ServerError } from '../features/sign_up/api/api_types';

export const useServerError = (error: ServerError | null) => {
  const [serverErrorMessage, setServerErrorMessage] = useState<string>('');

  useEffect(() => {
    if (error) {
      if (error) {
        const currentError: ServerError = error;

        switch (currentError.extensions.code) {
          case ErrorCode.ERR_ACCOUNT_ALREADY_EXIST:
            setServerErrorMessage('Пользователь с таким email уже существует');
            break;

          case ErrorCode.ERR_INVALID_PASSWORD:
            setServerErrorMessage(
              'Пароль должен содержать минимум 8 символов и может включать буквы, цифры и специальные символы'
            );
            break;

          case ErrorCode.ERR_FIELD_REQUIRED:
            setServerErrorMessage(`Обязательное поле: ${currentError.fieldName}`);
            break;

          default:
            setServerErrorMessage(currentError.message || 'Произошла ошибка при регистрации');
        }
      } else {
        setServerErrorMessage('Произошла ошибка при регистрации');
      }
    } else {
      setServerErrorMessage('');
    }
  }, [error]);

  return serverErrorMessage;
};
