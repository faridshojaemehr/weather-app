import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-modules/material.modules';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [MaterialModule, TranslateModule],
})
export class SharedModule {}
