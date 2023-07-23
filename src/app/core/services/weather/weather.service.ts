import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../../models/weather/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '42c06bcad8336a3402aeb2e0cdb60c35';
  private readonly api = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly units = 'metric';
  constructor(private http: HttpClient) {}

  public getWeatherByCity(city: string): Observable<IWeather> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric',
    };
    return this.http.get<IWeather>(this.api, { params: params });
  }
}
