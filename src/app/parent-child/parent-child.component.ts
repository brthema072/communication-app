import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild("stopWatch2", {static:false})
  @ViewChild(TimerComponent, {static:false})
  private myTimer: TimerComponent;

  @ViewChild("myP", {static: false})
  private myp: ElementRef

  constructor() { }

  ngOnInit() {
  }

  start(){
    this.myTimer.start();
  }

  stop(){
    this.myTimer.stop();

  }

  clear(){
    this.myTimer.clear();

  }

  ngAfterViewInit(){
    console.log(this.myp)
  }
}
