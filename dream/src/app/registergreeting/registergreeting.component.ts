import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registergreeting',
  templateUrl: './registergreeting.component.html',
  styleUrls: ['./registergreeting.component.css']
})
export class RegistergreetingComponent implements OnInit {

  name: any; //return from backend
  applicationId: any; //return from back end
  dateOfAppointment: any; //return from backend

  constructor() { }

  ngOnInit(): void {

    this.name = localStorage.getItem('name');
    this.applicationId = localStorage.getItem('applicationId');
    this.dateOfAppointment = localStorage.getItem('dateofappointment'); //date in string format;

  }

}
