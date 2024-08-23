import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { errorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { RequestHelperService } from './services/request-helper.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useValue: errorHandlingInterceptor, multi: true },
    RequestHelperService
  ]
})
export class CoreModule { }
