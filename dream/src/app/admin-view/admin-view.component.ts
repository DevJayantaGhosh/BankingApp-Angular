import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { IncomeFields } from '../models/IncomeFields';
import { PropertyFields } from '../models/PropertyFields';
import { LoanFields } from '../models/LoanFields';
import { DocFields } from '../models/DocFields';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  applications: ApplicationDetails[];
  incomeList: IncomeFields[];
  propertyList: PropertyFields[];
  loanList: LoanFields[];

  showApplication: boolean = false;
  showIncomeList: boolean = false;
  showPropertyList: boolean = false;
  showLoanList: boolean = false;

  showAppDetail: boolean = false;
  showIncomeDetail: boolean = false;
  showPropertyDetail: boolean = false;
  showLoanDetail: boolean = false;
  showDoc: boolean = false;
  showError: boolean = false;

  applicationId: number;
  appDetail: ApplicationDetails;
  incomeDetail: IncomeFields;
  propertyDetail: PropertyFields;
  loanDetail: LoanFields;
  doc: DocFields;
  errorMsg: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  viewApplications() {
    if(this.showApplication == false) {
      this.adminService.showApplicationList().subscribe(response => {
        this.applications = response;
        this.showApplication = !this.showApplication;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showDoc = false;
      })
    }
    else {
      this.showApplication = !this.showApplication;
    }
    
  }

  viewIncomeList() {
    if(this.showIncomeList == false) {
      this.adminService.showIncomeList().subscribe(response => {
        this.incomeList = response;
        this.showIncomeList = !this.showIncomeList;
        this.showApplication = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showDoc = false;
      })
    }
    else {
      this.showIncomeList = !this.showIncomeList;
    }
  }

  viewPropertyList() {
    if(this.showPropertyList == false) {
      this.adminService.showPropertyList().subscribe(response => {
        this.propertyList = response;
        this.showPropertyList = !this.showPropertyList;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showLoanList = false;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showDoc = false;
      })
    }
    else {
      this.showPropertyList = !this.showPropertyList;
    }
  }

  viewLoanList() {
    if(this.showLoanList == false) {
      this.adminService.showLoansList().subscribe(response => {
        this.loanList = response;
        this.showLoanList = !this.showLoanList;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showDoc = false;
      })
    }
    else {
      this.showLoanList = !this.showLoanList;
    }
  }

  viewAppDetail() {
    this.adminService.viewAppDetail(this.applicationId).subscribe(response => {
      this.appDetail = response;

      if(this.appDetail.status == false) {
        this.errorMsg = this.appDetail.applicationStatusMessage;
        this.showError = true;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }

      else if(this.showAppDetail == false) {
        this.showAppDetail = !this.showAppDetail;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }
    })
  }

  viewIncomeDetail() {
    this.adminService.viewIncomeDetail(this.applicationId).subscribe(response => {
      this.incomeDetail = response;

      if(this.incomeDetail.status == false) {
        this.errorMsg = this.incomeDetail.statusMessage;
        this.showError = true;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }

      else if(this.showIncomeDetail == false) {
        this.showIncomeDetail = !this.showIncomeDetail;
        this.showAppDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }
    })
  }

  viewPropertyDetail() {
    this.adminService.viewPropertyDetail(this.applicationId).subscribe(response => {
      this.propertyDetail = response;

      if(this.propertyDetail.status == false) {
        this.errorMsg = this.propertyDetail.statusMessage;
        this.showError = true;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }

      else if(this.showPropertyDetail == false) {
        this.showPropertyDetail = !this.showPropertyDetail;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }
    })
  }

  viewLoanDetail() {
    this.adminService.viewLoanDetail(this.applicationId).subscribe(response => {
      this.loanDetail = response;

      if(this.loanDetail.status == false) {
        this.errorMsg = this.loanDetail.statusMessage;
        this.showError = true;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }

      else if(this.showLoanDetail == false) {
        this.showLoanDetail = !this.showLoanDetail;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showError = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }
    })
  }

  viewDocuments() {
    this.adminService.viewDoc(this.applicationId).subscribe(response => {
      this.doc = response;

      if(this.doc.status == false) {
        this.errorMsg = this.doc.statusMessage;
        this.showError = true;
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
        this.showDoc = false;
      }
      else if(this.showDoc == false) {
        this.showDoc = true
        this.showAppDetail = false;
        this.showIncomeDetail = false;
        this.showPropertyDetail = false;
        this.showLoanDetail = false;
        this.showError = false;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
      }
    })
  }

}
