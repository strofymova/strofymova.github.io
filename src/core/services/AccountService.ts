// import { IProductDetail } from '../../widgets/marketplace/products/ProductDetailed';
// import { Category, ICategoryDiscount, IUser, IUserTypeDiscount, UserType } from './types';
// import { getCategoryUserTypeDiscount } from '../../test/mock/fetchCategoryUserTypeMock';
// import { getUserTypes } from '../../test/mock/fetchUserTypeMock';
// import { getUsers } from '../../test/mock/fetchUserMock';

// const AccountService = async () => {
//   const users: IUser[] = await getUsers();
//   let userTypeDiscounts: IUserTypeDiscount[];
//   try {
//     userTypeDiscounts = await getUserTypes();
//   } catch (error) {
//     console.error('Error loading user types:', error);
//   }

//   let categoryDiscounts: ICategoryDiscount[];
//   try {
//     categoryDiscounts = await getCategoryUserTypeDiscount();
//   } catch (error) {
//     console.error('Error loading category discounts:', error);
//   }

//   function getUserTypeDiscount(userType: UserType): IUserTypeDiscount {
//     return userTypeDiscounts.find((userTypeDiscount) => userTypeDiscount.userType === userType);
//   }

//   function getCategoryDiscount(categoryName: string, userType: UserType): ICategoryDiscount {
//     return categoryDiscounts.find(
//       (categoryDiscount) => categoryDiscount.category === categoryName && categoryDiscount.userType === userType
//     );
//   }

//   function getUser(userId: string): IUser | undefined {
//     return users.find((user) => user.id === userId);
//   }

//   return {
//     addUser: (user: IUser): void => {
//       users.push(user);
//     },

//     getUser,

//     setUserTypeDiscount: (userType: UserType, discount: number): void => {
//       const existing = userTypeDiscounts.find((userTypeDiscount) => userTypeDiscount.userType === userType);
//       if (existing) {
//         existing.discount = discount;
//       } else {
//         userTypeDiscounts.push({ userType, discount });
//       }
//     },

//     getUserTypeDiscount,

//     setCategoryDiscount: (category: Category, userType: UserType, discount: number): void => {
//       const existing = categoryDiscounts.find(
//         (categoryDiscount) => categoryDiscount.category === category && categoryDiscount.userType === userType
//       );
//       if (existing) {
//         existing.discount = discount;
//       } else {
//         categoryDiscounts.push({ category, userType, discount });
//       }
//     },

//     getCategoryDiscount,

//     calculateTotalDiscount: (userId: string, product: IProductDetail): number => {
//       const user = getUser(userId);
//       if (!user) return 0;

//       const userDiscount = getUserTypeDiscount(user.type);
//       const userDiscountValue = !userDiscount ? 0 : userDiscount.discount;

//       const categoryDiscount = getCategoryDiscount(product.category, user.type);
//       const categoryDiscountValue = !categoryDiscount ? 0 : categoryDiscount.discount;

//       const totalDiscount = userDiscountValue + categoryDiscountValue;
//       return Math.min(totalDiscount, 1);
//     },
//   };
// };

// export default AccountService;
