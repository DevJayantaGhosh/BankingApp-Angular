import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './models/Application';
import { ApplicationSubmitStatus } from './models/ApplicationSubmitStatus';
import { IncomeDetails } from './models/IncomeDetails';
import { Status } from './models/Status';
import { PropertyDetails } from './models/PropertyDetails';
import { LoanDetails } from './models/LoanDetails';
import { UserLogin } from './models/UserLogin';
import { UserLoginStatus } from './models/UserLoginStatus';
import { Accountdetail } from './models/accountdetail';
import { ApplicationDetails } from './models/ApplicationDetails'
import { FormStatus } from './models/FormStatus';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  applicationSubmit(application: Application) : Observable<ApplicationSubmitStatus> {
    let url = 'http://localhost:9292/application-submit';
    return this.http.post<ApplicationSubmitStatus>(url, application);
  }

  incomeSubmit(incomeDetails: IncomeDetails) : Observable <Status> {
    let url = 'http://localhost:9292/income-submit';
    return this.http.post<Status>(url, incomeDetails);
  }

  propertySubmit(propertyDetails: PropertyDetails) : Observable <Status> {
    let url = 'http://localhost:9292/property-submit';
    return this.http.post<Status>(url, propertyDetails);
  }

  loanSubmit(loanDetails: LoanDetails) : Observable <Status> {
    let url = 'http://localhost:9292/loan-submit';
    return this.http.post<Status>(url, loanDetails);
  }

  documentSubmit(formData: FormData) : Observable <Status> {// modifications required
    let url = 'http://localhost:9292/documents-submit';
    return this.http.post<Status>(url, formData);
  }

  trackApplication(applicationId: number) : Observable<Status> {
    let url = 'http://localhost:9292/track?applicationId='+applicationId;
    return this.http.get<Status>(url);
  }

  customerLogin(userLogin: UserLogin) : Observable<UserLoginStatus> {
    let url = 'http://localhost:9292/user-login';
    return this.http.post<UserLoginStatus>(url, userLogin);
  }

  getApplicationdetails(applicationId: number) : Observable<ApplicationDetails> {
    let url = 'http://localhost:9292/applicationdetails?applicationId='+applicationId;
    return this.http.get<ApplicationDetails>(url);
  }

  getAccountdetails(accountNo: number) : Observable<Accountdetail>{
    let url = 'http://localhost:9292/accountdetails?accountNo='+accountNo;
    return this.http.get<Accountdetail>(url);
  }

  formTrack(applicationId: number) : Observable<FormStatus> {
    let url = 'http://localhost:9292/trackForm?applicationId='+applicationId;
    return this.http.get<FormStatus>(url);
  }

}
