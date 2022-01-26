import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../models/Application';
import { CustomerService } from '../customer.service';
import { ApplicationSubmitStatus } from '../models/ApplicationSubmitStatus';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  model: any = {};
  application: Application = new Application();
  registeringStatus: ApplicationSubmitStatus;
  mydate:string;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.applicationSubmit(this.application).subscribe(response => {

      this.registeringStatus=response;

      if(this.registeringStatus.status == true){
        localStorage.setItem('name', String(response.name));
        localStorage.setItem('applicationId', String(response.applicationId));
        this.mydate=String(response.dateOfAppointment);
        localStorage.setItem('dateofappointment', this.mydate);

        this.router.navigate(['/on-register']);

      }
      else{
        this.router.navigate(['/error']);
      }

    })
  }

}
