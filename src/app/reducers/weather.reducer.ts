import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { WeatherState } from './app.state';

export const initialState: WeatherState = {
  weatherData: null,
  lastFetched: 0,
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
    lastFetched: Date.now(),
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
