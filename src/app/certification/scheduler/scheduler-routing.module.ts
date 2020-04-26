import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulerComponent } from './scheduler.component';
import { ListFocusComponent } from './list-focus/list-focus.component';

const routes: Routes = [
  { path: '', component: SchedulerComponent },
  { path: 'list', component: ListFocusComponent },
                        
 //{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule { }
