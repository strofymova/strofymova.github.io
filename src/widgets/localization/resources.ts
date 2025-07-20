import { changeLanguage } from "i18next";

export const resources = {
    en: {
        translation: {
            //storybook examle
            welcome: 'Welcome to my application!',
            description: 'This component demonstrates language switching.',
            close: 'Close',
            // changeTheme: 'Change theme',
            widgets: {
                changeTheme: 'Change theme',
                product: {
                    card: 'Product card',
                    cardDetailedTitle: 'Product description detailed',
                    cost: 'Cost',
                    name: 'Name',
                    description: 'Description',
                    category: 'Category',
                    showMore: 'Show more',
                },
                basket: {
                    add: 'Add to basket'
                }
            }
        }
    },
    ru: {
        translation: {
            //storybook examle
            welcome: 'Добро пожаловать в моё приложение!',
            description: 'Этот компонент демонстрирует переключение языка.',
            close: 'Закрыть',
            // changeTheme: 'Сменить тему',
            widgets: {
                changeTheme: 'Сменить тему',
                product: {
                    card: 'Карточка товара',
                    cardDetailedTitle: 'Подробное описание товара',
                    cost: 'Стоимость',
                    name: 'Название',
                    description: 'Описание',
                    category: 'Категория',
                    showMore: 'Показать еще',
                },
                basket: {
                    add: 'В корзину'
                }
            }
        }
    }
}
