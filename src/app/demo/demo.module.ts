import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TimerViewerComponent } from './components/timer-viewer/timer-viewer.component';


@NgModule({
  declarations: [
    TimerViewerComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
