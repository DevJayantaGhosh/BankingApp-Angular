import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ApplicationComponent } from './application/application.component';
import { RegistergreetingComponent } from './registergreeting/registergreeting.component';
import { ErrorComponent } from './error/error.component';
import { IncomeComponent } from './income/income.component';
import { PropertyComponent } from './property/property.component';
import { LoanComponent } from './loan/loan.component';
import { DocumentComponent } from './document/document.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { ApplyGateComponent } from './apply-gate/apply-gate.component';
import { AdminErrorComponent } from './admin-error/admin-error.component';
import { EditGateComponent } from './edit-gate/edit-gate.component';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactUs', component: ContactUSComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'on-register', component: RegistergreetingComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminloginComponent },
  { path: 'customer-login', component: CustomerloginComponent },
  { path: 'gate', component: ApplyGateComponent },
  { path: 'errorby-admin', component: AdminErrorComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'alledit', component: EditGateComponent ,
  children: [
  { path: 'editregi', component: EditRegistrationComponent },
  { path: 'editincome', component: EditIncomeComponent },
  { path: 'editproperty', component: EditPropertyComponent },
  { path: 'editloan', component: EditLoanComponent },
  { path: 'editdocs', component: EditDocumentComponent },
  ]
  },

  { path: 'admin-dashboard', component: AdmindashboardComponent ,
    children: [
      { path: 'admin-view', component: AdminViewComponent },
      { path: 'admin-create', component: AdminCreateComponent },
      { path: 'admin-update', component: AdminUpdateComponent },
    ]
  },




  { path: 'customer-dashboard', component: CustomerdashboardComponent },
  { path: 'login-error', component: LoginErrorComponent },
  { path: 'forgot-psw', component: ForgotPasswordComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
