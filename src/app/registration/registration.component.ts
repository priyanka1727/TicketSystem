import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ValidationClass } from './../shared/validation/ValidationClass';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public hasErrors = 0;
  public errorMessage: string[];
  public email: string;
  form = new FormGroup({
    firstName: new FormControl("", {
      // validators: [
      //   Validators.required
      // ]
    }),
    lastName: new FormControl("", {
      // validators: [
      //   Validators.required
      // ]
    }),
    email: new FormControl("", {
      // validators: [
      //   Validators.required,
      //   Validators.email,
      //   ValidationClass.emailDomainValidator
      // ]
    }),
    userName: new FormControl("", {
      // validators: [
      //   Validators.required
      // ]
    }),
    password: new FormControl("", {
      // validators: [
      //   Validators.required
      // ]
    }),
    contact: new FormControl("", {
      // validators: [
      //   Validators.required
      // ]
    })
  });

  constructor(private apiService: ApiService) {
  }
  signUp() {
    this.form.setErrors(
      {
        invalidLogin: true
      }
    )
  }
  checkEmailExist(email) {

    // this.email=this.form.value.email;
    console.log(email);
    this.apiService.emailExist(email);
  }
  createUser(): void {

    this.hasErrors = 0;
    this.errorMessage = ValidationClass.validateForm(this.form);
    // console.log(this.errorMessage);
    if (this.errorMessage.length !== 0) {
      console.log(this.errorMessage);
      this.hasErrors = 1;
    }
    else {
      console.log("ascascsa");
      console.log(this.form);
      //this.checkEmailExist();
      // this.apiService.createUser(this.form);
    }
  }
}
