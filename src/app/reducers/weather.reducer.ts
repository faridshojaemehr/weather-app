import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.action';
import { IWeather } from '../core/models/weather/weather.interface';

export interface WeatherState {
  weatherData: IWeather;
  loading?: boolean;
  error?: any;
}

export const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.getWeatherData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(WeatherActions.setWeatherData, (state, { weatherData }) => ({
    ...state,
    weatherData,
    loading: false,
    error: null,
  })),
  on(WeatherActions.clearWeatherData, (state) => ({
    ...state,
    weatherData: null,
    loading: false,
    error: null,
  })),
  on(WeatherActions.weatherDataError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
