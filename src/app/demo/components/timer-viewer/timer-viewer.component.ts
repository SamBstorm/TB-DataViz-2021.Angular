import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-viewer',
  templateUrl: './timer-viewer.component.html',
  styleUrls: ['./timer-viewer.component.scss']
})
export class TimerViewerComponent {

  public chrono:number = 0;
  public started:boolean = false;
  public interval:any;

  constructor() {
    this.chrono = 0;
    this.started = false;
  }

  start(){
    this.started = true;
    this.interval = setInterval(() => this.chrono++,10);
  }

  stop(){
    this.started = false;
    clearInterval(this.interval);
  }

  reset(){
    clearInterval(this.interval); 
    this.chrono = 0;
  }

}
