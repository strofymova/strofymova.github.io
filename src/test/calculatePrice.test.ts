import { IProductDetail } from '../widgets/marketplace/products/ProductDetailed';
import { Category, IUser, UserType } from '../core/services/types';
import { generateUUID } from '../core/utility/GeneratorUtil';
import AccountService from '../core/services/AccountService';

describe('AccountService', () => {
  let service: Awaited<ReturnType<typeof AccountService>>;

  const testProduct: IProductDetail = {
    id: generateUUID(),
    name: 'Test Product',
    category: Category.toy,
    price: 100,
    imageUrl: null,
    description: '1 piece',
  };
  const testUser: IUser = { id: generateUUID(), name: 'test1', type: UserType.standart };

  beforeAll(async () => {
    service = await AccountService();
    service.addUser(testUser);
  });

  describe('Calculate Price', () => {
    it('should sum base and category discounts correctly', async () => {
      service.setUserTypeDiscount(UserType.standart, 0.1);
      service.setCategoryDiscount(Category.toy, UserType.standart, 0.15);

      const discount = service.calculateTotalDiscount(testUser.id, testProduct);
      expect(testProduct.price * (1 - discount)).toBe(75);
    });

    it('should return original price when no discounts apply', async () => {
      const discount = service.calculateTotalDiscount(generateUUID(), {
        ...testProduct,
        category: 'unknow' as Category,
      });
      expect(testProduct.price * (1 - discount)).toBe(100);
    });
  });
});
