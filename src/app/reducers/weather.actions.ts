import { createAction, props } from '@ngrx/store';
import { IWeather } from '../core/models/weather/weather.interface';
import { WeatherActionTypes } from './app.state';

export const getWeatherData = createAction(
  WeatherActionTypes.GetWeatherData,
  props<{ city: string }>()
);

export const setWeatherData = createAction(
  WeatherActionTypes.SetWeatherData,
  props<{ city: string; weatherData: IWeather }>()
);

export const clearWeatherData = createAction(
  WeatherActionTypes.ClearWeatherData,
  props<{ city: string }>()
);

export const weatherDataError = createAction(
  WeatherActionTypes.WeatherDataError,
  props<{ city: string; error: any }>()
);
