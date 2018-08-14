import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  form=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    contact:new FormControl()
  });
  constructor(private apiService: ApiService) {
    this.createUser();
  }

  createUser(): void {
    this.apiService.createUser();
  }
}
