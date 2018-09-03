import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from '../user-account/user-account.component';
const accountRountes:Routes=[
{
path:'user',
component:UserAccountComponent
}
]


@NgModule({
  imports: [ 
    RouterModule.forChild(accountRountes) 
  ],
  exports: [ RouterModule ]
})

export class AccountRoutingModule { }
