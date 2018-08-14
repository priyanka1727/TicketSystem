import { ApiService } from './../services/api.service';
import { HttpModule } from '@angular/http';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHomeRoutingModule } from './base-home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BaseHomeRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    ApiService
  ]
})
export class BaseHomeModule { }
