import type { AuthResult } from '../../api_types';
import { ErrorCode, ServerErrors, SignUpBody } from '../../api_types';
import { API_CONFIG } from '../api_config';
import { apiService } from './apiService';

class AuthService {
  // Регистрация пользователя
  async signUp(userData: SignUpBody): Promise<AuthResult> {
    try {
      const payload: SignUpBody = {
        email: userData.email,
        password: userData.password,
        commandId: userData.commandId || API_CONFIG.COMMAND_ID,
      };

      const response = await apiService.post<AuthResult, SignUpBody>('/signup', payload);
      return response;
    } catch (error) {
      this.handleAuthError(error as Error & { data?: ServerErrors });
      throw error;
    }
  }

  // Обработка ошибок авторизации
  private handleAuthError(error: Error & { data?: ServerErrors }): void {
    if (error.data?.errors?.[0]) {
      const serverError = error.data.errors[0];

      switch (serverError.extensions.code) {
        case ErrorCode.ERR_ACCOUNT_ALREADY_EXIST:
          throw new Error('Пользователь с таким email уже существует');

        case ErrorCode.ERR_INCORRECT_EMAIL_OR_PASSWORD:
          throw new Error('Неверный email или пароль');

        case ErrorCode.ERR_FIELD_REQUIRED:
          throw new Error(`Обязательное поле: ${serverError.fieldName}`);

        case ErrorCode.ERR_INVALID_PASSWORD:
          throw new Error(
            'Пароль должен содержать минимум 8 символов и может включать буквы, цифры и специальные символы'
          );

        case ErrorCode.ERR_AUTH:
          throw new Error('Требуется авторизация');

        default:
          throw new Error(serverError.message || 'Произошла ошибка');
      }
    }

    throw error;
  }
}

export const authService = new AuthService();
