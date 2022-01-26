import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { LoanDetails } from '../models/LoanDetails';
import { Status } from '../models/Status';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanDetails: LoanDetails = new LoanDetails();
  applicationId: any;
  loanSubmitStatus: Status;
  estimatedamount: String;// from localStorage only for display

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
    this.estimatedamount= localStorage.getItem('estimatedamount');
  }

  onSubmit(){
    this.loanDetails.applicationId = this.applicationId;
    
    this.customerService.loanSubmit(this.loanDetails).subscribe(response => {
      this.loanSubmitStatus = response;

      if(this.loanSubmitStatus.status == true) {
        this.router.navigate(['/document']);
      }
    })
  }

}
