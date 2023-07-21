import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherComponent } from '../weather/weather/weather.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, WeatherModule],
})
export class HomeModule {}
