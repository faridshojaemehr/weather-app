import { createAction, props } from '@ngrx/store';
import { IWeather } from '../core/models/weather/weather.interface';

export const getWeatherData = createAction(
  '[Weather] Get Weather Data',
  props<{ city: string }>()
);
export const setWeatherData = createAction(
  '[Weather] Set Weather Data',
  props<{ weatherData: IWeather }>()
);
export const clearWeatherData = createAction('[Weather] Clear Weather Data');
export const weatherDataError = createAction(
  '[Weather] Weather Data Error',
  props<{ error: any }>()
);
