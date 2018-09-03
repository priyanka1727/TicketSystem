import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
import { Location } from '@angular/common';
import { ValidationClass } from './../shared/validation/ValidationClass';
declare const gapi : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hasErrors = 0;
    public errorMessage: string[];
 
  invalidLogin: boolean;
  private user: any;
  private firstName:String;
  private lastName:String;
  private email:String;
  form = new FormGroup({
    email: new FormControl("", {
        validators: [
            Validators.required,
            Validators.email,
            ValidationClass.emailDomainValidator
        ],
        updateOn: 'blur'
    }),
    password: new FormControl("", {
        validators: [
            Validators.required
        ]
    })
  });

  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location) {
    this.route
      .queryParams
      .subscribe(params => {
        //console.log(params);
        // Defaults to 0 if no query param provided.
        this.errorMessage = params['message'];
       // console.log("jgu" + this.errorMessage);
      });
  }
  //console.log(localStorage.getItem("currentUser"));

  ngOnInit() {
    gapi.load('auth2', function () {
      gapi.auth2.init()
    });
  }

  googleSignIn() {
    let googleAuth = gapi.auth2.getAuthInstance();
    var self = this;
    googleAuth.then(() => {
        googleAuth.signIn({scope: 'profile email'}).then(googleUser => {
          if(googleUser!=null)
          {
            console.log("hellp");
            this.user = googleUser.getBasicProfile();
            // this.firstName=this.user.ofa;
            // this.lastName=this.user.wea;
            // this.email=this.user.U3;
            self.apiService.createGoogleUser(this.user).subscribe(result => {
              console.log(result);
              if (result.errorCode) {
                console.log("hgj");
                this.router.navigate(['/login'], { skipLocationChange: true, queryParams: result });
              }
              else {
                localStorage.setItem("currentUser", JSON.stringify(result));
                this.router.navigate(['/user']);
              }
            });
            
          }
          // localStorage.removeItem("currentUser");
          // localStorage.setItem("currentUser", JSON.stringify(googleUser));
          // console.log(JSON.stringify(googleUser));
          // console.log(googleUser.getBasicProfile());


          //this.router.navigate(['/user']);
        });
        
    
  });
}

  logInUser() {
    this.hasErrors = 0;
    this.errorMessage = ValidationClass.validateForm(this.form);
    if(this.errorMessage !== null) {
        this.hasErrors = 1;
    }
    else{
    this.apiService.login(this.form).subscribe(result => {
      console.log(result);
      if (result.errorCode) {
        console.log("hgj");
        this.router.navigate(['/login'], { skipLocationChange: true, queryParams: result });
      }
      else {
        localStorage.setItem("currentUser", JSON.stringify(result));
        this.router.navigate(['/user']);
      }
    });
  }
}
}
