import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { IncomeFields } from '../models/IncomeFields';
import { PropertyFields } from '../models/PropertyFields';
import { LoanFields } from '../models/LoanFields';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  showAppDetail: boolean = true;
  showIncomeDetail: boolean = false;
  showPropertyDetail: boolean = false;
  showLoanDetail: boolean = false;

  applicationId: any;

  appDetail: ApplicationDetails;
  incomeDetail: IncomeFields;
  propertyDetail: PropertyFields;
  loanDetail: LoanFields;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
    this.adminService.viewAppDetail(this.applicationId).subscribe(response => {
      this.appDetail = response;
      this.showIncomeDetail = false;
      this.showPropertyDetail = false;
      this.showLoanDetail = false;
    })
  }

  viewAppDetail() {
    if(this.showAppDetail == false) {
      this.adminService.viewAppDetail(this.applicationId).subscribe(response => {
        this.appDetail = response;
        this.showAppDetail = !this.showAppDetail;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
      })
    }
  }

  viewIncomeDetail() {
    if(this.showIncomeDetail == false) {
      this.adminService.viewIncomeDetail(this.applicationId).subscribe(response => {
        this.incomeDetail = response;
        this.showIncomeDetail = !this.showIncomeDetail;
        this.showAppDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
      })
    }
  }

  viewPropertyDetail() {
    if(this.showPropertyDetail == false) {
      this.adminService.viewPropertyDetail(this.applicationId).subscribe(response => {
        this.propertyDetail = response;
        this.showPropertyDetail = !this.showPropertyDetail;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showLoanDetail = false;
      })
    }
  }

  viewLoanDetail() {
    if(this.showLoanDetail == false) {
      this.adminService.viewLoanDetail(this.applicationId).subscribe(response => {
        this.loanDetail = response;
        this.showLoanDetail = !this.showLoanDetail;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
      })
    }
  }

}
