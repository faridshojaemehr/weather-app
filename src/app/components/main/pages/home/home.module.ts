import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherModule } from '../weather/weather.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, WeatherModule],
})
export class HomeModule {}
