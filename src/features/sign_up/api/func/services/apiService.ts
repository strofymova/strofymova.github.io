import { ServerErrors } from '../../api_types';
import { API_CONFIG, buildUrl, getAuthHeader } from '../api_config';

// eslint-disable-next-line no-undef
interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

interface ErrorResponse {
  message?: string;
  errors?: ServerErrors[];
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = buildUrl(endpoint);

    // eslint-disable-next-line no-undef
    const defaultOptions: RequestInit = {
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...getAuthHeader(),
        ...options.headers,
      },
    };

    // eslint-disable-next-line no-undef
    const config: RequestInit = {
      ...defaultOptions,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await this.handleResponse<T>(response);
      return data;
    } catch (error) {
      this.handleError(error as Error);
      throw error;
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    const data: T =
      contentType && contentType.includes('application/json')
        ? await response.json()
        : ((await response.text()) as unknown as T);

    if (!response.ok) {
      const errorData = data as ErrorResponse;
      const errorMessage = errorData?.message || `HTTP error! status: ${response.status}`;

      const error = new Error(errorMessage) as Error & { status: number; data: unknown };
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  }

  private handleError(error: Error & { status?: number; data?: ServerErrors }): Error {
    console.error('API Error:', error);

    if (error.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }

    return error;
  }

  // Базовые методы
  get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T, D>(endpoint: string, data: D, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put<T, D>(endpoint: string, data: D, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiService = new ApiService();
