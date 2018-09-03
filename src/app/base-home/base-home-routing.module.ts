import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const baseHomeRoutes: Routes = [
	{
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signUp',
        component: RegistrationComponent
    }
];
@NgModule({
    imports: [ 
      RouterModule.forChild(baseHomeRoutes) 
    ],
    exports: [ RouterModule ]
})
export class BaseHomeRoutingModule { 
    constructor(private router: Router){
        if (localStorage.getItem("currentUser") != null) {
            this.router.navigate(["/user"]);            
        }
    }
}
