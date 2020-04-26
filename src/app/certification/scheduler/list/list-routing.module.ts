import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListModule } from './list.component';

const routes: Routes = [{ path: '', component: ListModule }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
