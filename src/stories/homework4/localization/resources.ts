import { changeLanguage } from "i18next";

export const resources = {
    en: {
        translation: {
            //storybook examle
            welcome: 'Welcome to my application!',
            description: 'This component demonstrates language switching.',

            // changeTheme: 'Change theme',
            widgets: {
                changeTheme: 'Change theme',
            }
        }
    },
    ru: {
        translation: {
            //storybook examle
            welcome: 'Добро пожаловать в моё приложение!',
            description: 'Этот компонент демонстрирует переключение языка.',
            // changeTheme: 'Сменить тему',
            widgets: {
                changeTheme: 'Сменить тему',
            }
        }
    }
}
