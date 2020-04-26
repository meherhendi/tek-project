import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, } from '@ng-bootstrap/ng-bootstrap';
import { ListFocusComponent } from './list-focus/list-focus.component';
@Component({
  selector: 'app-schedule',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  outputvalue : string;
  message : string;

  constructor(private calendar: NgbCalendar ) {}

  @ViewChild(ListFocusComponent, {static: false}) child;

  ngOnInit() {
    console.log(this.child);
  }

  ngAfterViewInit() {
    //this.message = this.child.model
    console.log("after view init :"+this.child);
  }
 
  selectToday() {
    this.model = this.calendar.getToday();
  }

  /*getOutputValue(selected : string) {
    this.outputvalue = selected
  }
  */
}
