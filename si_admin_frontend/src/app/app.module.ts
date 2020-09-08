import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./views/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { ManageEmpComponent } from "./views/manage-emp/manage-emp.component";
import { FeedbackComponent } from "./views/feedback/feedback.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSuffix,
  MatSortModule,
  MatPaginatorModule,
} from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { UpdateEmpComponent } from "./views/update-emp/update-emp.component";
import { MatSelectModule } from "@angular/material/select";
import { DeleteempComponent } from "./views/deleteemp/deleteemp.component";
import { ManagePkgsComponent } from "./views/manage-pkgs/manage-pkgs.component";
import { AddPkgComponent } from "./views/add-pkg/add-pkg.component";
import { UpdatePkgComponent } from "./views/update-pkg/update-pkg.component";
import { AddEmpComponent } from "./views/add-emp/add-emp.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ManageServicesComponent } from "./views/manage-services/manage-services.component";
import { ServiceListComponent } from "./views/service-list/service-list.component";
import { MatCardModule } from "@angular/material/card";
import { ManageUsersComponent } from "./views/manage-users/manage-users.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { ViewHistoryComponent } from "./views/view-history/view-history.component";
import { ViewServicesComponent } from "./views/view-services/view-services.component";
import { PkgHistoryComponent } from './views/pkg-history/pkg-history.component';
import { PkgHistoryServiceComponent } from './views/pkg-history-service/pkg-history-service.component';
import { ViewServiceImagesComponent } from './views/view-service-images/view-service-images.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    FeedbackComponent,
    ManageEmpComponent,
    UpdateEmpComponent,
    DeleteempComponent,
    ManagePkgsComponent,
    AddPkgComponent,
    UpdatePkgComponent,
    AddEmpComponent,
    ManageServicesComponent,
    ServiceListComponent,
    ManageUsersComponent,
    PageNotFoundComponent,
    ViewHistoryComponent,
    ViewServicesComponent,
    PkgHistoryComponent,
    PkgHistoryServiceComponent,
    ViewServiceImagesComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
