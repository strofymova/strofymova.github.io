import AccountService from '../core/services/AccountService';
import { Category, UserType } from '../core/services/types';

describe('AccountService', () => {
  let service: Awaited<ReturnType<typeof AccountService>>;

  beforeAll(async () => {
    service = await AccountService();
  });

  describe('Category User Type Discounts', () => {
    it('should set and get category discount for standard user', async () => {
      service.setCategoryDiscount(Category.car, UserType.standart, 0.1);
      const discount = service.getCategoryDiscount(Category.car, UserType.standart);
      expect(discount.discount).toBe(0.1);
    });

    it('should return undefined for non-existent category discount', async () => {
      const discount = service.getCategoryDiscount(Category.food, UserType.premium);
      expect(discount).toBeUndefined();
    });
  });
});
