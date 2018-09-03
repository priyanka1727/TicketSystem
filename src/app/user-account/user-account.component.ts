import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  public userName: any;
  private user: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService) {
      if (localStorage.getItem("currentUser") != null) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.user.firstName );
        this.userName = this.user.firstName + " " + this.user.lastName;
      }
      else
       this.router.navigate(["/login"]);
    
    }
  ngOnInit() {
    
  }
  logOut() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }
}
