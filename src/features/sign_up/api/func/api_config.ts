import { ApiConfig } from '../api_types';

export const API_CONFIG: ApiConfig = {
  BASE_URL:
    typeof process !== 'undefined'
      ? process.env.REACT_APP_API_BASE_URL || 'http://19429ba06ff2.vps.myjino.ru/api'
      : 'http://19429ba06ff2.vps.myjino.ru/api',
  TIMEOUT: typeof process !== 'undefined' ? parseInt(process.env.REACT_APP_API_TIMEOUT || '10000') : 10000,
  COMMAND_ID: typeof process !== 'undefined' ? process.env.REACT_APP_COMMAND_ID || '' : 'storybook-s_trofymova_dev',

  ENDPOINTS: {
    AUTH: {
      SIGN_UP: '/signup',
    },
  },

  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const buildUrl = (endpoint: string): string => `${API_CONFIG.BASE_URL}${endpoint}`;

// eslint-disable-next-line no-undef
export const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem('auth_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
