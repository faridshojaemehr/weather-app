import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IError } from 'src/app/core/models/error.interface';
import { IWeather } from 'src/app/core/models/weather/weather.interface';
import { AppState } from 'src/app/reducers/app.state';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() public cityName: string;
  errorObj: IError;

  public weatherData$: Observable<IWeather | null>;
  public hasError: boolean = false;

  constructor(private _snackBar: MatSnackBar, private store: Store) {
    this.store
      .pipe(
        select((state: AppState) => state.weather.weatherData[this.cityName])
      )
      .subscribe({
        next: (response) => {
          if (response) {
            this.hasError = false;
            if (!response.error) {
              this.weatherData$ = of(response);
              this.hasError = false;
            } else {
              this.weatherData$ = null;
              this.hasError = true;
              this.errorObj = response.error;
              this.openSnackBar(response.error.message, 'close');
            }
          }
        },
        error: (err) => {
          // not use for this logic
        },
      });
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 5000 });
  }
}
