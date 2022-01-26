import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent {

  applicationId: number;
  appStatus: Status;
  showError: boolean = false;
  showStatus: boolean = false;
  statusMsg: string;

  constructor(private customerService: CustomerService) { }

  track() {
    this.customerService.trackApplication(this.applicationId).subscribe(response => {
      this.appStatus = response;
      if(this.appStatus.status == false) {
        this.showError = true;
        this.showStatus = false;
        this.statusMsg = this.appStatus.statusMessage;
      }
      else {
        this.showStatus = true;
        this.showError = false;
        this.statusMsg = this.appStatus.statusMessage;
      }
    })
  }

}
