export const resources = {
  en: {
    translation: {
      //storybook examle
      errors: {
        unexpected_error: 'Unexpected error. We automatically register errors and will fix everything soon',
        'Failed to fetch': 'Connection error. Go to the server directory and start the server using the start script',
        is_required: 'Required field',
        invalid_email_address: 'Invalid email address',
        too_short_password: 'The password is too short',
        not_same_password: "Passwords don't match",
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect password or email',
        ERR_NOT_FOUND: 'An entity with this id was not found',
        ERR_USER_NOT_REGISTER: 'Register to access this feature',
        ERR_INCORRECT_PASSWORD: 'Invalid password',
        ERR_ACCOUNT_ALREADY_EXIST: 'An account with this email already exists',
        ERR_INVALID_PASSWORD: 'The password must contain at least 8 characters',
        ERR_INVALID_EMAIL: 'Invalid email',
        ERR_TOKEN_REQUIRED_ERROR:
          'Server token error. We automatically register all errors and will fix everything soon',
        ERR_AUTH_ERROR: 'You are not logged in, log in to your account and try again',
        ERR_DATA_BASE_ERROR: 'Database server error. We automatically register all errors and will fix everything soon',
        INTERNAL_SERVER_ERROR: 'Server error. We automatically register all errors and will fix everything soon',
        ERR_INVALID_NICKNAME:
          'The alias must be at least 7 characters and can contain only numbers, letters and an underscore',
      },
      welcome: 'Welcome to my application!',
      description: 'This component demonstrates language switching.',
      close: 'Close',
      open: 'Open',
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
          add: 'Add to basket',
        },
        authorization: {
          signIn: 'Sign in',
          profile: 'Profile',
          signUp: 'Sign up',
        },
      },
      screens: {
        ProfileScreen: {
          title: 'Profile',
          updateProfile: {
            title: 'Change profile',
            success: 'Profile changed successfully',
            save: 'Save',
          },
          changePassword: {
            title: 'Change password',
            success: 'Password changed successfully',
            save: 'Change',
          },
        },
        // ExamplesScreen: {
        //   title: 'Examples',
        // },
        // LessonsScreen: {
        //   title: 'Lessons',
        // },
        auth: {
          title: 'Authentication',
          signIn: {
            title: 'Sign in',
            submit: 'Sign in',
          },
          signUp: {
            title: 'Sign out',
            submit: 'Sign out',
          },
        },
        // HomeScreen: {
        //   title: 'Home',
        //   desc: `Welcome to the react course from otus!\n\nThis is a training project of the course. Here you will find materials for lectures, homework, as well as examples of some complex components.\n\nThe project is written in **typescript**, **redux**, **redux-saga** using **webpack**. In it , you can spy on the implementation of the dark/light theme, locale switching, navigation, token exchange between browser tabs.\n\nThe project also has its own server implemented on **graphql**, **apollo**, **express** and using a json file as a database (in real development, do not do this, it's just to save you from installing the database). Interaction with the server is implemented, namely the ability to register a user, log in to an account, but do not forget to start the server locally - use the _start:client_ and _start:server_ commands.\n\nWelcome and good luck in learning!`,
        // },
        // TeachersScreen: {
        //   title: 'Teachers',
        //   desc: "Someday there will be teachers' cards here, but that's not for sure",
        // },
      },
      forms: {
        AuthForm: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
          },
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
        },
        ChangePasswordForm: {
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          newPassword: {
            title: 'New password',
            placeholder: 'Enter new password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
        },
        EmailForm: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
          },
        },
        ProfileForm: {
          name: {
            title: 'Nickname',
            placeholder: 'Come up with a pseudonym for yourself',
          },
          about: {
            title: 'About',
            placeholder: 'Write something about yourself',
          },
        },
        RepeatPasswordForm: {
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      //storybook examle
      welcome: 'Добро пожаловать в моё приложение!',
      description: 'Этот компонент демонстрирует переключение языка.',
      close: 'Закрыть',
      open: 'Открыть',
      errors: {
        unexpected_error: 'Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим',
        'Failed to fetch':
          'Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start',
        is_required: 'Обязательное поле',
        invalid_email_address: 'Некорректный email адрес',
        too_short_password: 'Слишком короткий пароль',
        not_same_password: 'Пароли не совпадают',
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Некорректный пароль или email',
        ERR_NOT_FOUND: 'Сущность с таким id не найдена',
        ERR_USER_NOT_REGISTER: 'Зарегистрируйтесь, чтобы получить доступ к этой функции',
        ERR_INCORRECT_PASSWORD: 'Некорректный пароль',
        ERR_ACCOUNT_ALREADY_EXIST: 'Аккаунт с таким email уже существует',
        ERR_INVALID_PASSWORD: 'Пароль должен содержать от 8 символов',
        ERR_INVALID_EMAIL: 'Некорректный email',
        ERR_TOKEN_REQUIRED_ERROR:
          'Серверная ошибка токена. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_AUTH_ERROR: 'Вы не авторизованы, войдите в учетную запись и повторите попытку',
        ERR_DATA_BASE_ERROR:
          'Серверная ошибка базы данный. Мы автоматически регистрируем все ошибки и скоро все исправим',
        INTERNAL_SERVER_ERROR: 'Серверная ошибка. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_INVALID_NICKNAME:
          'Псевдоним должен быть от 7 символов и может содержать только числа, буквы и символ нижнего подчеркивания',
      },
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
          add: 'В корзину',
        },
        authorization: {
          signIn: 'Авторизоваться',
          profile: 'Профиль',
          signUp: 'Регистрация',
        },
      },
      screens: {
        ProfileScreen: {
          title: 'Профиль',
          updateProfile: {
            title: 'Изменить профиль',
            success: 'Профиль успешно изменен',
            save: 'Сохранить',
          },
          changePassword: {
            title: 'Изменить пароль',
            success: 'Пароль успешно изменен',
            save: 'Изменить',
          },
        },
        // ExamplesScreen: {
        //   title: 'Примеры',
        // },
        // LessonsScreen: {
        //   title: 'Уроки',
        // },
        auth: {
          title: 'Аутентификация',
          signIn: {
            title: 'Войти',
            submit: 'Войти',
          },
          signUp: {
            title: 'Зарегистрироваться',
            submit: 'Зарегистрироваться',
          },
        },
        // HomeScreen: {
        //   title: 'Главная',
        //   desc: `Приветствую на курсе по react от otus!\n\nЭто учебный проект курса. Здесь вы найдете материалы к лекциям, домашние задания, а так же примеры некоторых сложных компонентов.\n\nПроект написан на **typescript**, **redux**, **redux-saga** с использованием **webpack**. В нем можно подсмотреть реализацию темной/светлой темы, переключение локали, навигацию, обмен токен между вкладками браузера.\n\nТак же в проекте есть свой сервер, реализованный на **graphql**, **apollo**, **express** и использующий в качестве базы данных json файл (в реальной разработке не делайте так, это только чтобы избавить вас от установки базы данных). Реализовано взаимодействие с сервером, а именно возможность зарегистрировать пользователя, войти в учетную запись, но не забудьте запустить сервер локально - используйте команды _start:client_ и _start:server_.\n\nДобро пожаловать и удачи в обучении!`,
        // },
        // TeachersScreen: {
        //   title: 'Преподаватели',
        //   desc: 'Когда-нибудь здесь появятся карточки преподавателей, но это не точно',
        // },
      },
      forms: {
        AuthForm: {
          email: {
            title: 'Email',
            placeholder: 'Укажите email',
          },
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
        },
        ChangePasswordForm: {
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          newPassword: {
            title: 'Новый пароль',
            placeholder: 'Укажите новый пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
        },
        EmailForm: {
          email: {
            title: 'Email',
            placeholder: 'Укажите email',
          },
        },
        ProfileForm: {
          name: {
            title: 'Псевдоним',
            placeholder: 'Придумайте себе псевдоним',
          },
          about: {
            title: 'О себе',
            placeholder: 'Напишите что-нибудь о себе',
          },
        },
        RepeatPasswordForm: {
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
        },
      },
    },
  },
};
