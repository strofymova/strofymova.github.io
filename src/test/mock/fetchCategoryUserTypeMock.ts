import { Category, ICategoryDiscount, UserType } from '../../core/services/types';

export const MOCK_CATEGORY_USER_TYPE_DISCOUNT = [
  {
    category: Category.car,
    userType: UserType.gold,
    discount: 0.3,
  },
  {
    category: Category.car,
    userType: UserType.premium,
    discount: 0.6,
  },
  {
    category: Category.car,
    userType: UserType.free,
    discount: 0.1,
  },
  {
    category: Category.toy,
    userType: UserType.gold,
    discount: 0.3,
  },
  {
    category: Category.toy,
    userType: UserType.standart,
    discount: 0.1,
  },
  {
    category: Category.food,
    userType: UserType.gold,
    discount: 0.5,
  },
];

export const getCategoryUserTypeDiscount = async (): Promise<ICategoryDiscount[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CATEGORY_USER_TYPE_DISCOUNT), 200);
  });
