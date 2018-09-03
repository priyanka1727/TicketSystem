import { UserAccountComponent } from './../user-account/user-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from '../account/account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    UserAccountComponent
  ]
})
export class AccountModule { }
