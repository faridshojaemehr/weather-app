import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherModule } from '../weather/weather.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    WeatherModule,
    SharedModule,
    FormsModule,
  ],
})
export class SearchModule {}
