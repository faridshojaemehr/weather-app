import { WeatherActions } from './action';
import { initialState } from './initialState';
import { Action } from '@ngrx/store';

export function weatherReducer(state = initialState.weather, action: Action) {
  if (action.type === WeatherActions.SET_WEATHER) {
    // @ts-ignore
    return action.data;
  }

  return state;
}
