import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IWeather } from '../core/models/weather/weather.interface';
import { weatherReducer } from './weather.reducer';

export interface AppState {
  weather: IWeather;
}

export const reducers: ActionReducerMap<AppState> = {
  weather: weatherReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
