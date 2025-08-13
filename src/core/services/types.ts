export enum UserType {
  standart = 'Standard',
  premium = 'Premium',
  gold = 'Gold',
  free = 'Free',
  admin = 'Admin',
}

export interface IUser {
  id: string;
  name: string;
  type: UserType;
}

export interface IUserTypeDiscount {
  userType: UserType;
  discount: number;
}

export enum Category {
  car = 'Car',
  toy = 'Toy',
  food = 'Food',
}

export interface ICategoryDiscount {
  category: Category;
  userType: UserType;
  discount: number;
}
