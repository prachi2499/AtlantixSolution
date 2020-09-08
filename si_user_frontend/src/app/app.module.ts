import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,  MatFormFieldModule, MatIconModule, MatInputModule, MatSuffix, MatCardModule} from '@angular/material';
import { PackagesComponent } from './views/packages/packages.component';
import { ServicesComponent } from './views/services/services.component';
import { MoredetailComponent } from './views/packages/moredetail/moredetail.component';
import { ServicedetailComponent } from './views/servicedetail/servicedetail.component';
import { ServiceportfolioComponent } from './views/serviceportfolio/serviceportfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HistoryComponent } from './views/history/history.component';
import { HistorydetailComponent } from './views/history/historydetail/historydetail.component';

import { BillingComponent } from './views/billing/billing.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgetpasswordComponent,
    PackagesComponent,
    ServicesComponent,
    MoredetailComponent,
    ServicedetailComponent,
    ServiceportfolioComponent,
    ContactComponent,
    FeedbackComponent,
    ProfileComponent,
    ChangepasswordComponent,
    PageNotFoundComponent,
    HistoryComponent,
    HistorydetailComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
