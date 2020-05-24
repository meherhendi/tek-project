import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar, } from '@ng-bootstrap/ng-bootstrap';
import { ListFocusComponent } from './list-focus/list-focus.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };
  message: string;
  identifier : string;
  scheduleform: FormGroup;
  teststring :string  = 'hello' ;
  x : EventListener;

  constructor(private calendar: NgbCalendar,private route : ActivatedRoute) { }

  @ViewChild(ListFocusComponent, { static: false }) child;

  ngOnInit() {
    this.identifier = this.route.snapshot.params['identifier'];
    console.log(this.identifier);
    this.scheduleform= new FormGroup({
      'certif-name' : new FormControl(),
      'WT-token' : new FormControl (null,[Validators.required]),
      'WT-number' : new FormControl(),
      'date' : new FormControl() ,
    });
    console.log(this.scheduleform.get('WT-number').value);
    
  }

  ngAfterViewInit() {
    console.log("after view init :" + this.child);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  onChangeDate() {
    console.log("onchangedate" + this.model);
    this.scheduleform.controls['date'].setValue(this.model); // doesn't work

  }

  receiveMessage($event) {
    this.message = $event;
    console.log("event: "+$event+"message: "+this.message);
    this.scheduleform.controls['certif-name'].setValue(this.message);
    
    //this.message.subscribe(msg => console.log(msg));
    
    //console.log(this.message);
  }
  onSubmit(){
    console.log(this.scheduleform.value);
    console.log(this.date);
    console.log("model: "+this.model);
    // this.scheduleform.controls['date'].setValue(this.model);
  }

  /*onChange(newValue) {
    console.log(newValue);
    newValue.subscribe(msg => console.log(msg));
    this.change.emit(newValue);
  }*/

}
