import { useState, useEffect } from 'react';
import { message } from 'antd';
import AccountService from '../core/services/AccountService';
import { UserType } from '../core/services/types';
import { Profile } from '../shared/server.types';

export const useAdminRight = (profile: Profile) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        setIsLoading(true);
        const service = await AccountService();

        if (profile?.email) {
          const user = service.getUser(profile.email);
          setIsAdmin(user?.type === UserType.admin);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        message.error('Failed to verify admin privileges');
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [profile?.email]);

  return {
    isAdmin,
    isLoading,
  };
};
