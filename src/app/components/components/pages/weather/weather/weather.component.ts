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
export class WeatherComponent implements OnChanges {
  @Input() public cityName: string;
  errorObj: IError;

  public weatherData$: Observable<IWeather | null>;
  public hasError: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private weatherService: WeatherService,
    private store: Store
  ) {
    this.weatherData$ = this.store.pipe(
      select((state: AppState) => state.weather.weatherData)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getCityWeatherData(this.cityName);
  }

  // public getCityWeatherData(city: string) {
  //   this.weatherService.getWeatherByCity(city).subscribe({
  //     next: (weatherData: IWeather) => {
  //       this.weatherData$ = weatherData;
  //       this.hasError = false;
  //     },
  //     error: (err) => {
  //       this.hasError = true;
  //       this.errorObj = err.error;
  //       this.openSnackBar(
  //         ` ${this.cityName}  : ${this.errorObj.message}`,
  //         'close'
  //       );
  //     },
  //   });
  // }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
