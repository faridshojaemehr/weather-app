import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IError } from 'src/app/core/models/error.interface';
import { IWeather } from 'src/app/core/models/weather/weather.interface';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
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
    this.weatherData$ = this.store.pipe(
      select((state: AppState) => state.weather.weatherData[this.cityName])
    );
    this.weatherData$.subscribe((res) => {
      console.log(res);
    });
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
