import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getWeatherData } from 'src/app/reducers/weather.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cityName: string = 'Tehran';
  constructor(private store: Store) {}

  public onSearch(city: string): void {
    this.store.dispatch(getWeatherData({ city }));
  }
}
