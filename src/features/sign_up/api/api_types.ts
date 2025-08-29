export interface SignUpBody {
  email: string;
  password: string;
  commandId: string;
}

export interface AuthResult {
  token: string;
}

export interface ServerError {
  extensions: {
    code: ErrorCode;
  };
  name: string;
  fieldName?: string;
  stack: string;
  message: string;
}

export interface ServerErrors {
  errors: ServerError[];
}

export enum ErrorCode {
  ERR_INCORRECT_EMAIL_OR_PASSWORD = 'ERR_INCORRECT_EMAIL_OR_PASSWORD',
  ERR_ACCOUNT_ALREADY_EXIST = 'ERR_ACCOUNT_ALREADY_EXIST',
  ERR_FIELD_REQUIRED = 'ERR_FIELD_REQUIRED',
  ERR_INCORRECT_PASSWORD = 'ERR_INCORRECT_PASSWORD',
  ERR_INVALID_PASSWORD = 'ERR_INVALID_PASSWORD',
  ERR_NOT_VALID = 'ERR_NOT_VALID',
  ERR_AUTH = 'ERR_AUTH',
  ERR_NO_FILES = 'ERR_NO_FILES',
  ERR_NOT_ALLOWED = 'ERR_NOT_ALLOWED',
  ERR_NOT_FOUND = 'ERR_NOT_FOUND',
  ERR_VALIDATION_ERROR = 'ERR_VALIDATION_ERROR',
  ERR_INVALID_QUERY_PARAMS = 'ERR_INVALID_QUERY_PARAMS',
  ERR_INTERNAL_SERVER = 'ERR_INTERNAL_SERVER',
}

export interface ApiConfig {
  BASE_URL: string;
  TIMEOUT: number;
  COMMAND_ID: string;
  ENDPOINTS: {
    AUTH: {
      SIGN_UP: string;
      SIGN_IN: string;
      PROFILE: string;
    };
  };
  // eslint-disable-next-line no-undef
  DEFAULT_HEADERS: HeadersInit;
}

export type SignUpType = {
  loading: boolean;
  error: string | null;
  signUp: (userData: SignUpBody) => Promise<AuthResult>;
};
