import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertifDetailsComponent } from './certification/certif-details/certif-details.component';
import { CertificationComponent } from './certification/certification.component';


const routes: Routes = [
  { path: '', redirectTo: '/certification', pathMatch: 'full' },
  { path: 'certification', component: CertificationComponent },
  { path: 'CertifDetails', component: CertifDetailsComponent },
  { path: 'scheduler', loadChildren: () => import('./certification/scheduler/scheduler.module').then(m => m.SchedulerModule) },
  //children: [
    
    //{ path: 'new', component: RecipeEditComponent },
    //{ path: ':id', component: RecipeDetailComponent },
    //{ path: ':id/edit', component: RecipeEditComponent },
  //{ path: 'shopping-list', component: ShoppingListComponent },
  //{ path: 'CertifDetails', component: CertifDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
