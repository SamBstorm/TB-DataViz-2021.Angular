import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceComponent } from './exercice.component';
import { ExerciceRoutingModule } from './exercice-routing.module';



@NgModule({
  declarations: [
    ExerciceComponent,
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
