import { Status } from './../models/Status';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { UpdateApplicationStatus } from '../models/UpdateApplicationStatus';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { LoanDetailsForAdmin } from '../models/LoanDetailsForAdmin';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})

export class AdminUpdateComponent implements OnInit {

  appId: number;
  appdetail: ApplicationDetails = new ApplicationDetails();

  constructor(
    private adminService:AdminService,  
    private customerService: CustomerService, 
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  updateAppStatusDetail:UpdateApplicationStatus= new UpdateApplicationStatus();//use for update form
  feedbackStatus:Status;
  custEmail:any;

  accNumber:any;//can be use during EMI table updating time

  applicationStatus:any;
  fName:any;
  mName:any;
  lName:any;
  myApplicationId:any;

  showStatusMsg: boolean = false;
  appStatusMsg: string;

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.appId).subscribe(response =>{
      this.appdetail = response;

      this.myApplicationId=this.appId;
      this.fName=this.appdetail.firstname;
      this.mName=this.appdetail.middlename;
      this.lName=this.appdetail.lastname;

      this.custEmail=this.appdetail.email;
      this.applicationStatus= this.appdetail.applicationStatusMessage;

      if(this.appdetail.status==false){
        this.router.navigate(['/errorby-admin']);
      }
    })
  }


  mySubmit(){

    this.adminService.updateApplicationStatus(this.updateAppStatusDetail).subscribe(response=>{
    this.feedbackStatus=response;
      this.showStatusMsg = true;
      this.appStatusMsg = this.feedbackStatus.statusMessage;
    })
  }



  //Loan Table Updating Functionality

  customerAppId:number;
  loanDetailsforadmin:LoanDetailsForAdmin=new LoanDetailsForAdmin();

  ForLoanDetails(){
    this.adminService.getLoanDetailsForAdmin(this.customerAppId).subscribe(response=>{
      this.loanDetailsforadmin=response;
      if(this.loanDetailsforadmin.myStatus==false){
        this.router.navigate(['/errorby-admin']);
      }
    })
  }

  gotStatus:Status;
  showLoanMsg: boolean = false;
  updateLoanMsg: string;

  updateLoanOnSubmit(){
    this.adminService.updateLoanTableByAdmin(this.loanDetailsforadmin).subscribe(response=>{
      this.gotStatus=response;
      this.showLoanMsg = true;
      this.updateLoanMsg = this.gotStatus.statusMessage;

    })
  }

}
