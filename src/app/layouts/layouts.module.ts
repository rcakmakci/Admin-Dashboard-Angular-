import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './main-layout/components/header/header.component';
import { SidebarComponent } from './main-layout/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
