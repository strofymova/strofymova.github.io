import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './custom_sign_up.module.css';
import { message } from 'antd';

const registrationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type CustomSignUpFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onSubmit: (data: CustomSignUpFormData) => Promise<void>;
  serverError?: string;
  isLoading?: boolean;
}

const CustomSignUpForm: React.FC<RegistrationFormProps> = ({ onSubmit, serverError, isLoading = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CustomSignUpFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const handleFormSubmit = async (data: CustomSignUpFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  React.useEffect(() => {
    if (serverError) {
      console.log(JSON.stringify(serverError));
      if (serverError.toLowerCase().includes('email') || serverError.toLowerCase().includes('invalid')) {
        setError('email', {
          type: 'server',
          message: serverError,
        });
        message.error(serverError);
      } else {
        message.error(serverError);
      }
    }
  }, [serverError, setError]);

  return (
    <div className={styles.registration_form}>
      <h2>Sign up</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={errors.email ? styles.error : ''}
            disabled={isLoading}
          />
          {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
            disabled={isLoading}
          />
          {errors.password && <span className={styles.error_message}>{errors.password.message}</span>}
        </div>

        {errors.root && <div className={styles.server_error}>{errors.root.message}</div>}

        <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default CustomSignUpForm;
