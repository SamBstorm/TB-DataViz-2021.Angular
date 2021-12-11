import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-viewer',
  templateUrl: './timer-viewer.component.html',
  styleUrls: ['./timer-viewer.component.scss']
})
export class TimerViewerComponent implements OnInit, OnDestroy {

  private _date : Date

  constructor() {
    this._date = new Date()
    }
  ngOnDestroy(): void {
    console.warn('Bye bye!');
  }

  ngOnInit(): void {
    console.log(this._date)
  }

}
