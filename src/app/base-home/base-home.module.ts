import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHomeRoutingModule } from './base-home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseHomeRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class BaseHomeModule { }
