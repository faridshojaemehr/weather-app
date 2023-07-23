import { IWeather } from '../core/models/weather/weather.interface';

export interface AppState {
  weather: WeatherState;
}

export interface WeatherState {
  weatherData: WeatherData;
  lastFetched: { [city: string]: number };
  loading: boolean;
  error: any;
}

export interface WeatherData {
  [city: string]: IWeather;
}

export enum WeatherActionTypes {
  GetWeatherData = '[Weather] Get Weather Data',
  SetWeatherData = '[Weather] Set Weather Data',
  ClearWeatherData = '[Weather] Clear Weather Data',
  WeatherDataError = '[Weather] Weather Data Error',
}
