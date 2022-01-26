import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormStatus } from '../models/FormStatus';

@Component({
  selector: 'app-apply-gate',
  templateUrl: './apply-gate.component.html',
  styleUrls: ['./apply-gate.component.css']
})
export class ApplyGateComponent implements OnInit {

  applicationId: number;
  formStatus: FormStatus;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  trackForm() {
    this.customerService.formTrack(this.applicationId).subscribe(response => {
      this.formStatus = response;

      if(this.formStatus.status == true) {
        if(this.formStatus.currentForm == 1) {
          localStorage.setItem('applicationId', String(response.applicationId));
          this.router.navigate(['/income']);
        }
        else if(this.formStatus.currentForm == 2) {
          localStorage.setItem('applicationId', String(response.applicationId));
          this.router.navigate(['/property']);
        }
        else if(this.formStatus.currentForm == 3) {
          localStorage.setItem('applicationId', String(response.applicationId));
          this.router.navigate(['/loan']);
        }
        else if(this.formStatus.currentForm == 4) {
          localStorage.setItem('applicationId', String(response.applicationId));
          this.router.navigate(['/document']);
        }
        else if(this.formStatus.currentForm == 0) {
          this.router.navigate(['/login']);
        }
      }
      else {
        this.router.navigate(['/errorby-admin']);
      }
    })
  }

}
