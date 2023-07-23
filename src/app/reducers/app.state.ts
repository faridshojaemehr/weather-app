import { IWeather } from '../core/models/weather/weather.interface';

export interface AppState {
  weather: WeatherState;
}

export interface WeatherState {
  weatherData: IWeather | null;
  lastFetched: number;
  loading: boolean;
  error: any;
}
