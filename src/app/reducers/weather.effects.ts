import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  mergeMap,
  map,
  catchError,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { WeatherService } from '../core/services/weather/weather.service';
import * as WeatherActions from './weather.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { IError } from '../core/models/error.interface';

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
      mergeMap(([action, lastFetched]) => {
        const currentTime = Date.now();
        const isDataValid =
          lastFetched[action.city] > 0 &&
          currentTime - lastFetched[action.city] <= 30 * 60 * 1000;
        if (isDataValid) {
          return of(WeatherActions.clearWeatherData({ city: action.city }));
        } else {
          return this.weatherService.getWeatherByCity(action.city).pipe(
            map((weatherData) =>
              WeatherActions.setWeatherData({ city: action.city, weatherData })
            ),
            catchError((error) =>
              of(
                WeatherActions.weatherDataError({
                  city: action.city,
                  error: this.getErrorInfo(error),
                })
              )
            )
          );
        }
      })
    )
  );

  clearWeatherDataAfterInterval$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.setWeatherData),
      mergeMap((action) => {
        const interval = 30 * 60 * 1000; // 30 minutes
        return timer(interval).pipe(
          map(() => WeatherActions.clearWeatherData({ city: action.city }))
        );
      })
    )
  );

  private getErrorInfo(error: IError) {
    return {
      cod: error?.cod || 500,
      message: error?.message || 'Unknown error occurred.',
    };
  }
}
