import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { PackagesComponent } from './views/packages/packages.component';
import { ServicesComponent } from './views/services/services.component';
import { MoredetailComponent } from './views/packages/moredetail/moredetail.component';
import { ServicedetailComponent } from './views/servicedetail/servicedetail.component';
import { ServiceportfolioComponent } from './views/serviceportfolio/serviceportfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HistoryComponent } from './views/history/history.component';
import { HistorydetailComponent } from './views/history/historydetail/historydetail.component';
import { BillingComponent } from './views/billing/billing.component';

const routes: Routes = [
   


  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgetpwd',component:ForgetpasswordComponent},


   
   {path:'',component:HomeComponent},
   {path:'profile',component:ProfileComponent},
   {path:'changePassword',component:ChangepasswordComponent},
    {path:'services',component:ServicesComponent},
    {path:'package',component:PackagesComponent},
    {path:'package/moredetail/:id',component:MoredetailComponent},
    {path:'services/servicedetail/:s_id',component:ServicedetailComponent},
    {path:'services/servicedetail/serviceportfolio/:s_id',component:ServiceportfolioComponent},
    {path:'contact',component:ContactComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'history',component:HistoryComponent},
    {path:'historydetail/:id',component:HistorydetailComponent},
    {path:'package/billing/:pk_id',component:BillingComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
