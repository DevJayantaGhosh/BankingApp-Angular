import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { RegistrationDetails } from '../models/RegistrationDetails';
import { Status } from '../models/Status';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  customerAppId:number;
  regiDetails:RegistrationDetails=new RegistrationDetails();

    constructor(private adminService:AdminService,   private router: Router) { }

  ngOnInit(): void {
  }

  ForRegistrationDetails(){
    this.adminService.getRegistrationDEtailsForEdit(this.customerAppId).subscribe(response=>{
      //alert(JSON.stringify(this.customerAppId));
      this.regiDetails=response;
     // alert(JSON.stringify(this.regiDetails));
      if(this.regiDetails.status==true){

      }
      else{
        this.router.navigate(['/errorby-admin']);
      }
    })

  }

  feedback:Status=new Status();

  onSubmitUpdate(){
    //alert(JSON.stringify(this.regiDetails));
    this.adminService.updateRegistrationByUser(this.regiDetails).subscribe(response=>{

      this.feedback=response;
      //alert(JSON.stringify(this.feedback));
    })

  }


}
