import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ListModule],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    NgbTypeaheadModule ,
    NgbModule,
  ]
})
export class ListModule { }
