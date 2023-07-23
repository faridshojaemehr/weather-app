import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getWeatherData } from 'src/app/reducers/weather.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cityName: string;
  constructor(private store: Store) {}

  public onSearch(city: string): void {
    const dta = this.store.dispatch(getWeatherData({ city }));
    this.cityName = city;
    console.log(dta);
  }
}
