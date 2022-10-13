# Проект Mesto на Реакте с авторизацией и регистрацией

## Обзор
* Интро
* Для запуска проекта
* Функциональность
* Использованные технологии
* Планы по доработке проекта

**Интро**

В данном задании реализован проект Mesto на React с авторизацией и регистрацией.
Страница сверстана согласно макету [макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=28212%3A155)

**Для запуска проекта**
вам необходимо выполнить команды:
`npm i`
`npm run build`
`npm run start`

## Функциональность
Проект представляет из себя SPA с основной страницей и окнами регистрации и авторизации пользователей.
Проект позволяет пользователям зарегистрироваться и авторизоваться на сервере, чтобы просматривать содержимое основной страницы. 
На основной странице находится функционал просмотра, добавления и удаления карточек, редактирования информации о пользователе и его аватара.


## Использованные технологии:
### Верстка:
- Разметка страницы с помощью display:flex и display:grid.
- Станица адаптирована для ширины экрана от 320px до 1440px для различных мобильных устройтв и десктопов.
- Плавное измерение внешнего вида кнопок при наведении мыши с помощью псевдокласса :hover и свойства transition.
- Оформление названия классов блоков и элементов, а также структуры файлов по БЭМ
- Для вёрстки заголовков применяются несколько тегов от h1 до h4 , текстовые блоки размечены тегами p , списки — ul и li . Присутствуют и используются по назначению элементы header, main и footer.
- Страничка является кросс-браузерной, работает в браузерах Firefox, Google Chrome и Yandex Browser.
### React:
- Фукциональные блоки страницы реализованы с помощью функциональных компонентов. Основной компонент - App.js.
- Использован декларативный подход.
- Всплывающие окна с возможностью редактирования содержимого страницы и модальыне окна с информацией об успешной регистрации реалзиованы через добавление класса 'popup__opened' для JSX-элементов.
- Запросы на авторизацию, регистрацию и проверку токена работают через сервис `https://auth.nomoreparties.co`.
- Запросы на добавление карточек и изменение информации о пользователе работают через сервис `https://mesto.nomoreparties.co/v1/cohort-47`.
- Использованы Реакт-хуки useState, useEffect.
- Все компоненты подписаны на контекст с информацией о пользователе.

### React Router:
- React Router v6 реализует навигацию между страницами приложения.
- Маршрут выбирается исходя из состояния авторизации пользователя.
- Использованы useLocation, Link, Navigate, Route, Routes.
- Основаная страница приложения расположена в защищенном маршруте

 Для проверки ревьюером проект загружен на [https://github.com/]
 Для просмотра проекта необходимо перейти по ссылке: [https://alenakrestyaninova.github.io/react-mesto-auth/]


## Планы по доработке проекта
1. Добавить функциональность закрытия попапов по эскейпу и оверлею
2. Добавить страницу PageNotFound
