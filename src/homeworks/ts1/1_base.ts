/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */

export const removePlus = (value: string): string => value.replace(/^\+/, '');

export const addPlus = (value: string): string => `+${value}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: string, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d: number = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;
export const getTransformFromCss = (transformCssString: string): { x: number; y: number } => {
  const data: RegExpMatchArray | null = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]): number =>
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): [number, number, number] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = (arr: number[]): { value: number; index: number }[] =>
  arr.map((value: number, index: number) => ({ value, index }));
export const toStringArray = (arr: number[]): string[] =>
  arr.map((value: number, index: number) => `${value}_${index}`);

type Customer = {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

type TransformedCustomers = {
  [key: number]: {
    name: string;
    age: number;
    isSubscribed: boolean;
  };
};
export const transformCustomers = (customers: Customer[]): TransformedCustomers => {
  return customers.reduce((acc: TransformedCustomers, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
