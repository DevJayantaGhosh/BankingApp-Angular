import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ApplicationComponent } from './application/application.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { HttpClientModule } from '@angular/common/http';
import { IncomeComponent } from './income/income.component';
import { PropertyComponent } from './property/property.component';
import { RegistergreetingComponent } from './registergreeting/registergreeting.component';
import { ErrorComponent } from './error/error.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    TrackerComponent,
    FaqComponent,
    ContactUSComponent,
    ApplicationComponent,
    MustMatchDirective,
    IncomeComponent,
    PropertyComponent,
    RegistergreetingComponent,
    ErrorComponent,
    LoanComponent,
    DocumentComponent,
    LoginComponent,
    AdminloginComponent,
    CustomerloginComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    LoginErrorComponent,

    AdminViewComponent,

    AdminCreateComponent,

    AdminUpdateComponent,

    ApplyGateComponent,

    AdminErrorComponent,

    EditGateComponent,

    EditRegistrationComponent,

    EditIncomeComponent,

    EditPropertyComponent,

    EditLoanComponent,

    EditDocumentComponent,

    ThankYouComponent,

    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
