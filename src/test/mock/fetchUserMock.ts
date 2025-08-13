import { IUser, UserType } from '../../core/services/types';

export const MOCK_USER = [
  {
    id: 'sunlight-vrn@mail.ru',
    name: 'sunlight-vrn@mail.ru',
    type: UserType.admin,
  },
];

export const getUsers = async (): Promise<IUser[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USER), 0);
  });
