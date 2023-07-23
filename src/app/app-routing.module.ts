import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main/pages/search/search.module').then(
        (m) => m.SearchModule
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
