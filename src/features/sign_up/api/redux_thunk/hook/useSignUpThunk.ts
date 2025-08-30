import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/signUpSlice';
import { AppDispatch, RootState } from '../store/store';
import { signUp } from '../store/signUpActions';

export const useSignUpThunk = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, token } = useSelector((state: RootState) => state.signup);

  const handleSignUp = async (email: string, password: string) => dispatch(signUp({ email, password }));

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    signUp: handleSignUp,
    clearError: handleClearError,
    isLoading,
    error,
    token,
  };
};
