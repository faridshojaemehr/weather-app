import { WeatherState } from './app.state';

export const initialState: WeatherState = {
  weatherData: {},
  lastFetched: {},
  loading: false,
  error: null,
};
