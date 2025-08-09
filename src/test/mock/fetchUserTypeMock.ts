import { IUserTypeDiscount, UserType } from '../../core/services/types';

export const MOCK_USER_TYPES = [
  {
    userType: UserType.standart,
    discount: 0.1,
  },
  {
    userType: UserType.premium,
    discount: 0.3,
  },
  {
    userType: UserType.gold,
    discount: 0.5,
  },
  {
    userType: UserType.free,
    discount: 0.0,
  },
];

export const getUserTypes = async (): Promise<IUserTypeDiscount[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USER_TYPES), 200);
  });
