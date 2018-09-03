import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
@Injectable()
export class ApiService {
  currentUser: any;
  email: any;
  constructor(private http: Http) { }

  createUser(formGroup: FormGroup): void {
    console.log(formGroup);
    console.log(formGroup.value);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let abc = {
      "email": formGroup.value.email,
      "firstName": formGroup.value.firstName,
      "lastName": formGroup.value.lastName,
      "userName": formGroup.value.userName,
      "password": formGroup.value.password,
      "contact": formGroup.value.contact
    };
    this.http.post('http://localhost:8080/employee/add', JSON.stringify(abc), options).subscribe(
      response => {
        console.log(response.json());
      }
    );
  }
  login(formGroup: FormGroup) {
    console.log(formGroup);
    console.log(formGroup.value);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let abc = {
      "email": formGroup.value.email,

      "password": formGroup.value.password

    };
    return this.http.post('http://localhost:8080/user/login', JSON.stringify(abc), options)
      .map(response => {
        let result = response.json();

        // if (result)
        //   {
        //   // localStorage.setItem('token', result.token);

        //   // let jwt = new JwtHelper();
        //   // this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        //   return true; 
        // }
        // else 
        return result;
      });


  }
  emailExist(email: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("testing email" + email);
    this.http.get("http://localhost:8080/employee/get/" + email).subscribe(response =>{
      console.log(response);
    }
    );
  }
  createGoogleUser(user: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.email = user.U3;
    let abc = {
      "firstName": user.ofa,
      "lastName": user.wea,
      "email": user.U3
    };
    return this.http.put('http://localhost:8080/employee/add', JSON.stringify(abc), options)
      .map(
        response => {
          let result = response.json();
          console.log(response.json());
          return result;
        }
      );

  }
}
