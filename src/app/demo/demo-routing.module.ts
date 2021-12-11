import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerViewerComponent } from './components/timer-viewer/timer-viewer.component';

const routes: Routes = [
  {path : "timer", component : TimerViewerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
