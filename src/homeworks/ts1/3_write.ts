/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)*/

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

/* Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */
export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
/*
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)*/
export type Operation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: string;
};

/*
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')*/
/*
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

export const num = 36;
export const numStart = 2;
export const numEnd = 5;
function getRandomId(): string {
  return Math.random().toString(num).substring(numStart, numEnd);
}

function getRandomProductName(): string {
  const names = ['Bread', 'Milk', 'Eggs', 'Chees', 'Meat', 'Cookie'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomProductDescription(): string | undefined {
  const description = ['1 piece', '1 kg', 'some', 'many', undefined];
  return description[Math.floor(Math.random() * description.length)];
}

function getRandomProductPhoto(id: string): string {
  return 'https://example.com/product_' + id + '.jpg';
}

export const aroundNum = 100;
export const fractionDigits = 2;
function getRandomPrice(): number {
  return parseFloat((Math.random() * aroundNum).toFixed(fractionDigits));
}

function getOldPrice(currentPrice: number, difference: number): number {
  return currentPrice * difference;
}

function getRandomCategoryName(): string {
  const names = ['Bakery', 'Drinks', 'Vegetables', 'Canned food'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomCategoryPhoto(id: string): string {
  return 'https://example.com/category_' + id + '.jpg';
}

function getRandomCategory(): Category {
  const id: string = getRandomId();
  const category: Category = {
    id: id,
    name: getRandomCategoryName(),
    photo: getRandomCategoryPhoto(id),
  };
  return category;
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const category: Category = getRandomCategory();
  const productId: string = getRandomId();
  const price: number = getRandomPrice();
  const diff = 1.2;
  return {
    id: productId,
    name: getRandomProductName(),
    photo: getRandomProductPhoto(productId),
    desc: getRandomProductDescription(),
    createdAt: createdAt,
    price: price,
    oldPrice: getOldPrice(price, diff),
    category: category,
  };
};

// Пример использования
const randomProduct = createRandomProduct(new Date().toISOString());
console.log(randomProduct);

function getOperationName(id: string, operation: string): string {
  return operation + '_' + id;
}
function getDescription(id: string): string | undefined {
  return Math.random() > 0.5 ? 'Description of operation ' + id : undefined; // Случайное описание или undefined
}

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 */
export const createRandomOperation = (createdAtValue: string): Operation => {
  const isCost = Math.random() > 0.5;
  const id: string = getRandomId();
  const type: string = isCost ? 'Cost' : 'Profit';
  const operation: Operation = {
    id: id,
    name: getOperationName(id, type),
    desc: getDescription(id),
    createdAt: createdAtValue,
    amount: getRandomPrice(),
    category: getRandomCategory(),
    type: type,
  };
  return operation;
};

// Пример использования
const randomOperation = createRandomOperation(new Date().toISOString());
console.log(randomOperation);
