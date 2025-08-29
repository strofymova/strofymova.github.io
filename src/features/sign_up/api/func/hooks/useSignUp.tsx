import { useState } from 'react';
import { authService } from '../services/authService';
import { AuthResult, SignUpBody, SignUpType } from '../../api_types';

export const useSignUp = (): SignUpType => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const signUp = async (userData: SignUpBody): Promise<AuthResult> => {
    try {
      setLoading(true);
      setError(null);
      const result = await authService.signUp(userData);
      return result;
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signUp,
  };
};
