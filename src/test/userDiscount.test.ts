import { generateUUID } from 'src/core/utility/GeneratorUtil';
import AccountService from '../core/services/AccountService';
import { UserType } from '../core/services/types';

describe('AccountService - userDiscount', () => {
  let service: Awaited<ReturnType<typeof AccountService>>;
  const testUser = { id: generateUUID(), name: 'Test User', type: UserType.standart };

  beforeAll(async () => {
    service = await AccountService();
    service.addUser(testUser);
  });

  describe('User Type Discounts', () => {
    it('should set and get standard user discount', async () => {
      service.setUserTypeDiscount(UserType.standart, 0.15);
      const discount = service.getUserTypeDiscount(UserType.standart);
      expect(discount?.discount).toBe(0.15);
    });

    it('should set and get premium user discount', async () => {
      service.setUserTypeDiscount(UserType.premium, 0.25);
      const discount = service.getUserTypeDiscount(UserType.premium);
      expect(discount?.discount).toBe(0.25);
    });

    it('should set and get free user discount', async () => {
      service.setUserTypeDiscount(UserType.free, 0);
      const discount = service.getUserTypeDiscount(UserType.free);
      expect(discount?.discount).toBe(0);
    });

    it('should set and get gold user discount', async () => {
      service.setUserTypeDiscount(UserType.gold, 0.2);
      const discount = service.getUserTypeDiscount(UserType.gold);
      expect(discount?.discount).toBe(0.2);
    });

    it('should return undefined for non-existent user type', async () => {
      const discount = service.getUserTypeDiscount('NonExistent' as UserType);
      expect(discount).toBeUndefined();
    });
  });
});
