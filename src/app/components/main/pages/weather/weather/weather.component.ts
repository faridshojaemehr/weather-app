import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWeather } from 'src/app/core/models/weather/weather.interface';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() public cityName: string;

  public weatherData: IWeather;
  public hasError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCityWeatherData(this.cityName);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getCityWeatherData(this.cityName);
  }

  public getCityWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe((weatherData: IWeather) => {
      this.weatherData = weatherData;
    });
  }
}
