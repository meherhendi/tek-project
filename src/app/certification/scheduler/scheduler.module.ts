import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler.component';
import { NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListFocusComponent } from './list-focus/list-focus.component';
//import { ListModule } from './list/list.module';
//import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [SchedulerComponent, ListFocusComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    FormsModule,
    //ListModule
    
  ]
})
export class SchedulerModule { }
