import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout';

const routes: Routes = [
  { path: "", redirectTo: "/admin", pathMatch: "full" },
  {
    path: "admin", component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./features/dashboards').then(m => m.DashboardModule) },
      { path: 'products', loadChildren: () => import('./features/products').then(m => m.ProductsModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./features/auth').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
