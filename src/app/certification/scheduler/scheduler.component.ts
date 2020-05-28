import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar, } from '@ng-bootstrap/ng-bootstrap';
import { ListFocusComponent } from './list-focus/list-focus.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import {HttpserviceService} from 'src/app/shared/httpservice.service'


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

  constructor(private calendar: NgbCalendar,private route : ActivatedRoute,private HttpService : HttpserviceService) { }

  @ViewChild(ListFocusComponent, { static: false }) child;

  ngOnInit() {
    this.identifier = this.route.snapshot.params['identifier'];
    // console.log(this.identifier);
    this.scheduleform= new FormGroup({
      'certif_name' : new FormControl(),
      'WT_token' : new FormControl (null,[Validators.required]),
      'WT_number' : new FormControl(),
      'date' : new FormControl() ,
    });
    console.log(this.scheduleform.get('WT_number').value);
    //console.log("listening to value changes: ",this.model)
    
  }

  // ngAfterViewInit() {
  //   console.log("after view init :" + this.child);
  // }

  selectToday() {
    this.model = this.calendar.getToday();
    // console.log("log of this.model: ",this.model);
  }

  onChangeDate() {
    // console.log("onchangedate" + this.model);
    this.scheduleform.controls['date'].setValue(this.model); // doesn't work

  }

  receiveMessage($event) {
    this.message = $event;
    // console.log("event: "+$event+"message: "+this.message);
    this.scheduleform.controls['certif_name'].setValue(this.message);
    
    //this.message.subscribe(msg => console.log(msg));
    
    //console.log(this.message);
  }
  onSubmit(){
    console.log(this.scheduleform.value);
    // console.log(this.date);
    // console.log("model: "+this.model);
    this.HttpService.Post_Schedule_WhiteTest_form(this.scheduleform.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    // this.scheduleform.controls['date'].setValue(this.model);
  }

  /*onChange(newValue) {
    console.log(newValue);
    newValue.subscribe(msg => console.log(msg));
    this.change.emit(newValue);
  }*/

}
