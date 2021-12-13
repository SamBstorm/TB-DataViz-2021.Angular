import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    ChronoFormatPipe
  ],
  exports: [
    ChronoFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
