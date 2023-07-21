import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../../models/weather/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '42c06bcad8336a3402aeb2e0cdb60c35';
  private readonly api = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {}

  public getWeather(cityName: string): Observable<IWeather> {
    const url = `${this.api}${cityName}&appid=${this.apiKey}`;
    return this.http.get<IWeather>(url);
  }
}
