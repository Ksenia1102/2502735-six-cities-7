/**
 * Константа для настройки приложения.
 * Содержит параметр, обозначающее количество предложений аренды.
 */
export const Setting = {
  OffersCount: 312
};

/**
 * Перечесление для хранения маршрутов.
 * Содержит параметры, обозначающие пути в приложении.
 */
export enum AppRoute {
  Home = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

/**
 * Перечесление для авторизации пользователя.
 * Содержит параметры, обозначающие статусы авторизации.
 */
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

/**
 * Перечесление для метки на карте.
 * Содержит параметры, обозначающие статусы активности метки.
 */
export enum Pins {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}
