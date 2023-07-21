import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWeather } from 'src/app/core/models/weather/weather.interface';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public cityName: string;
  public weatherData: IWeather;
  public hasError: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getCityNameInUrl();
    this.getCityWeatherData();
  }

  public getCityNameInUrl(): void {
    this.activatedRoute.params.subscribe((route) => {
      this.cityName = route['cityName'];
    });
  }

  public getCityWeatherData(): void {
    this.weatherService.getWeather(this.cityName).subscribe(
      (weatherData: IWeather) => {
        this.weatherData = weatherData;
      },
      (error) => {
        this.hasError = true;
      }
    );
  }
}
