import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TimerViewerComponent } from './components/timer-viewer/timer-viewer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TimerViewerComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
