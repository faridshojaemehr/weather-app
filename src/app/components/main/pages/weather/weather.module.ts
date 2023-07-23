import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, SharedModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
