import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Accountdetail } from '../models/accountdetail';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  applicationId: number;
  accountNo: number;
  appdetail: ApplicationDetails = new ApplicationDetails();
  acdetail: Accountdetail = new Accountdetail();
  name:string;
  showAppError: boolean = false;
  showAccError: boolean = false;
  showAppStatus: boolean = false;
  showAccStatus: boolean = false;
  statusMsg: string;
  accType: string;
  ifscCode: string;
  branchName: string;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name=sessionStorage.getItem('customerName');
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.applicationId).subscribe(response =>{
      this.appdetail = response;

      if(this.appdetail.status==true){
        this.showAppStatus = true;
        this.showAccStatus = false;
        this.showAppError = false;
        this.showAccError = false;
        this.statusMsg = this.appdetail.applicationStatusMessage;
      }
      else{
        this.showAppError = true;
        this.showAccError = false;
        this.showAppStatus = false;
        this.showAccStatus = false;
        this.statusMsg = this.appdetail.applicationStatusMessage;
        this.router.navigate(['/errorby-admin']);
      }
    })
  }

  onAccountSubmit(){
    this.customerService.getAccountdetails(this.accountNo).subscribe(response =>{
      this.acdetail = response;

      if(this.acdetail.accountStatus==true){
        this.showAccStatus = true;
        this.showAppStatus = true;
        this.showAppError = false;
        this.showAccError = false;
        this.accType = this.acdetail.accountType;
        this.ifscCode = this.acdetail.ifscCode;
        this.branchName = this.acdetail.branchName;
      }
      else{
        this.showAccError = true;
        this.showAppError = false;
        this.showAccStatus = false;
        this.showAppStatus = false;
        this.statusMsg = "Invalid account number";
        this.router.navigate(['/errorby-admin']);
      }
    })

  }

}
