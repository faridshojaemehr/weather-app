import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IError } from 'src/app/core/models/error.interface';
import { IWeather } from 'src/app/core/models/weather/weather.interface';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnChanges {
  @Input() public cityName: string;
  errorObj: IError;

  public weatherData: IWeather;
  public hasError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCityWeatherData(this.cityName);
  }

  public getCityWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (weatherData: IWeather) => {
        this.weatherData = weatherData;
        this.hasError = false;
      },
      error: (err) => {
        this.hasError = true;
        this.errorObj = err.error;
      },
    });
  }
}
