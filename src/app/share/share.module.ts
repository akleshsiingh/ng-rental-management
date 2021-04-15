import { ClickedOutsideDirective } from './d/clicked-outside.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const importExport = [ClickedOutsideDirective];

@NgModule({
  declarations: [...importExport],
  imports: [
    CommonModule
  ],
  exports: [...importExport]
})
export class ShareModule { }
