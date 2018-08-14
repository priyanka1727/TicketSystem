import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  createUser(): void {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let abc= {name:"kkkkk"};
    this.http.post('http://localhost:8085/ticketApi/api/user/create',JSON.stringify(abc), options).subscribe(
      response=>{
        console.log(response.json());
      }
    );
  }
}
