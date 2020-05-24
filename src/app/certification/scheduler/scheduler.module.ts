import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler.component';
import { NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListFocusComponent } from './list-focus/list-focus.component';
import { CertifService } from 'src/app/certif.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpserviceService } from 'src/app/shared/httpservice.service';
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
    ReactiveFormsModule,
    //ListModule
    SharedModule
    
  ],
  providers :[CertifService , HttpserviceService],
})
export class SchedulerModule { }
