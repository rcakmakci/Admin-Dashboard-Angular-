import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ECommerceDashboardComponent } from './e-commerce-dashboard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ECommerceDashboardComponent }
];






@NgModule({
  declarations: [
    ECommerceDashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DashboardModule { }
