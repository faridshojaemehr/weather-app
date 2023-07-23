import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { initialState } from './app.state';

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.getWeatherData, (state, { city }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(WeatherActions.setWeatherData, (state, { city, weatherData }) => ({
    ...state,
    weatherData: {
      ...state.weatherData,
      [city]: { ...weatherData, error: null },
    },
    lastFetched: { ...state.lastFetched, [city]: Date.now() },
    loading: false,
    error: null,
  })),
  on(WeatherActions.clearWeatherData, (state, { city }) => ({
    ...state,
    weatherData: { ...state.weatherData, [city]: null }, // Do not clear the error here, let it remain for the city if previously set
    lastFetched: { ...state.lastFetched, [city]: 0 },
    loading: false,
  })),
  on(WeatherActions.weatherDataError, (state, { city, error }) => ({
    ...state,
    weatherData: {
      ...state.weatherData,
      [city]: { ...state.weatherData[city], error },
    }, // Store error in weather data for the specific city
    loading: false,
  }))
);
