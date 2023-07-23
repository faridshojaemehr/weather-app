import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime } from 'rxjs';

import { getWeatherData } from 'src/app/reducers/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  cityName: string;
  public search: Subject<Event>;

  constructor(private store: Store) {
    this.search = new Subject<Event>();
    this.search.pipe(debounceTime(500)).subscribe((response) => {
      this.onSearch(response);
    });
  }

  public onSearch(input: Event | string) {
    if (typeof input == 'string') {
      this.cityName = input;
      this.store.dispatch(getWeatherData({ city: this.cityName }));
    } else {
      const city = (input.target as HTMLInputElement).value;
      this.store.dispatch(getWeatherData({ city }));
      this.cityName = city;
    }
  }
}
