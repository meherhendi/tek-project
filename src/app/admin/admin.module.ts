import { NgModule } from '@angular/core';
import { CommonModule,DecimalPipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgbHighlight, NgbModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpserviceService } from 'src/app/shared/httpservice.service';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    NgbButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbHighlight,

  ],
  providers: [DecimalPipe,HttpserviceService],
})
export class AdminModule { }
