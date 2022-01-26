import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service';
import { UserLoginStatus } from '../models/UserLoginStatus';
import { UserLogin } from '../models/UserLogin';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  model: any = {};
  userlogin: UserLogin = new UserLogin();
  userLoginStatus: UserLoginStatus;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.customerService.customerLogin(this.userlogin).subscribe(response => {
      this.userLoginStatus = response;

      if(this.userLoginStatus.status == true){
        sessionStorage.setItem('customerName', String(this.userLoginStatus.name));
        sessionStorage.setItem('applicationId', String(this.userLoginStatus.applicationId));
        sessionStorage.setItem('applicationStatus', String(this.userLoginStatus.applicationStatus));
        this.router.navigate(['/customer-dashboard']);
      }
      else {
        this.router.navigate(['/login-error']);
      }
    })

  }

}
