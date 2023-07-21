import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main/pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/main/pages/weather/weather.module').then(
        (m) => m.WeatherModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
