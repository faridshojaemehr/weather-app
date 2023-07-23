import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  mergeMap,
  map,
  catchError,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { WeatherService } from '../core/services/weather/weather.service';
import * as WeatherActions from './weather.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { IWeather } from '../core/models/weather/weather.interface';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private store: Store<AppState>
  ) {}

  getWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeatherData),
      withLatestFrom(this.store.select((state) => state.weather.lastFetched)),
      filter(([action, lastFetched]) => {
        const currentTime = Date.now();
        const isDataValid =
          lastFetched > 0 && currentTime - lastFetched <= 30 * 60 * 1000;
        return !isDataValid;
      }),
      mergeMap(([action, lastFetched]) => {
        return this.weatherService.getWeatherByCity(action.city).pipe(
          map((weatherData: IWeather) =>
            WeatherActions.setWeatherData({ weatherData })
          ),
          catchError((error) => of(WeatherActions.weatherDataError({ error })))
        );
      })
    )
  );
}
