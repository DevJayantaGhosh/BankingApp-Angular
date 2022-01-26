import { CreateAccountDetailsByAdmin } from './models/CreateAccountDetailsByAdmin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminLogin } from './models/AdminLogin';
import { AdminLoginStatus } from './models/AdminLoginStatus';
import { DocFields } from './models/DocFields';
import { ApplicationDetails } from './models/ApplicationDetails';
import { PropertyFields } from './models/PropertyFields';
import { LoanFields } from './models/LoanFields';
import { IncomeFields } from './models/IncomeFields';
import { Status } from './models/Status';
import { UpdateApplicationStatus } from './models/UpdateApplicationStatus';
import { LoanDetailsForAdmin } from './models/LoanDetailsForAdmin';
import { RegistrationDetails } from './models/RegistrationDetails';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  loginAdmin(adminLogin: AdminLogin) : Observable<AdminLoginStatus> {
    let url = 'http://localhost:9292/admin-login';
    return this.http.post<AdminLoginStatus>(url, adminLogin);
  }

  showApplicationList() : Observable<Array<ApplicationDetails>> {
    let url = 'http://localhost:9292/view-all-applications';
    return this.http.get<Array<ApplicationDetails>>(url);
  }

  createAccountByAdmin(accDetailsByAdmin:CreateAccountDetailsByAdmin) : Observable<Status>{
    let url= 'http://localhost:9292/account-create-byadmin';
    return this.http.post<Status>(url,accDetailsByAdmin);
  }

  showIncomeList(): Observable<Array<IncomeFields>> {
    let url = 'http://localhost:9292/view-all-income-details';
    return this.http.get<Array<IncomeFields>>(url);
  }

  showPropertyList(): Observable<Array<PropertyFields>> {
    let url = 'http://localhost:9292/view-all-property-details';
    return this.http.get<Array<PropertyFields>>(url);
  }

  showLoansList(): Observable<Array<LoanFields>> {
    let url = 'http://localhost:9292/view-all-loan-details';
    return this.http.get<Array<LoanFields>>(url);
  }

  updateApplicationStatus(updateAppStatusDetail:UpdateApplicationStatus):Observable<Status>{
     let url = 'http://localhost:9292/update-appStatus';
     return this.http.post<Status>(url,updateAppStatusDetail);
  }

  viewAppDetail(applicationId: number) : Observable<ApplicationDetails> {
    let url = 'http://localhost:9292/view-application?applicationId='+applicationId;
    return this.http.get<ApplicationDetails>(url);
  }

  viewIncomeDetail(applicationId: number) : Observable<IncomeFields> {
    let url = 'http://localhost:9292/view-income?applicationId='+applicationId;
    return this.http.get<IncomeFields>(url);
  }

  viewPropertyDetail(applicationId: number) : Observable<PropertyFields> {
    let url = 'http://localhost:9292/view-property?applicationId='+applicationId;
    return this.http.get<PropertyFields>(url);
  }

  viewLoanDetail(applicationId: number) : Observable<LoanFields> {
    let url = 'http://localhost:9292/view-loan?applicationId='+applicationId;
    return this.http.get<LoanFields>(url);
  }

  viewDoc(applicationId: number) : Observable<DocFields> {
    let url = 'http://localhost:9292/view-document?applicationId='+applicationId;
    return this.http.get<DocFields>(url);
  }



  getLoanDetailsForAdmin(applicationId: number):Observable<LoanDetailsForAdmin>{
    let url = 'http://localhost:9292/loanDetailsforAdmin?applicationId='+applicationId;
    return this.http.get<LoanDetailsForAdmin>(url);
  }

  updateLoanTableByAdmin(  loanDetailsforadmin:LoanDetailsForAdmin):Observable<Status>{
    let url = 'http://localhost:9292/update-loanByadmin';
   return this.http.post<Status>(url,loanDetailsforadmin);
  }


  //EDIT-ing Functionality of registration or application table
  getRegistrationDEtailsForEdit(applicationId:number): Observable<RegistrationDetails>{
    let url = 'http://localhost:9292/regiDetailsForEditing?applicationId='+applicationId;
    return this.http.get<RegistrationDetails>(url);
  }

  updateRegistrationByUser(regiDetails:RegistrationDetails):Observable<Status>{
    let url = 'http://localhost:9292/editRegistrationByUser';
    return this.http.post<Status>(url,regiDetails);
  }

}
