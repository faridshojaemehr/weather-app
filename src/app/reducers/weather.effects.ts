import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherService } from '../core/services/weather/weather.service';
import * as WeatherActions from './weather.action';
import { IWeather } from '../core/models/weather/weather.interface';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  getWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeatherData),
      mergeMap((action) =>
        this.weatherService.getWeatherByCity(action.city).pipe(
          map((weatherData: IWeather) =>
            WeatherActions.setWeatherData({ weatherData })
          ),
          catchError((error) => of(WeatherActions.weatherDataError({ error })))
        )
      )
    )
  );
}
