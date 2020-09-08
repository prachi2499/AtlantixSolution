import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { FeedbackComponent } from "./views/feedback/feedback.component";
import { ManageEmpComponent } from "./views/manage-emp/manage-emp.component";
import { UpdateEmpComponent } from "./views/update-emp/update-emp.component";
import { DeleteempComponent } from "./views/deleteemp/deleteemp.component";
import { AddPkgComponent } from "./views/add-pkg/add-pkg.component";
import { UpdatePkgComponent } from "./views/update-pkg/update-pkg.component";
import { ManagePkgsComponent } from "./views/manage-pkgs/manage-pkgs.component";
import { AddEmpComponent } from "./views/add-emp/add-emp.component";
import { ManageServicesComponent } from "./views/manage-services/manage-services.component";
import { ServiceListComponent } from "./views/service-list/service-list.component";
import { ManageUsersComponent } from "./views/manage-users/manage-users.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { ViewHistoryComponent } from "./views/view-history/view-history.component";
import { ViewServicesComponent } from "./views/view-services/view-services.component";
import { PkgHistoryComponent } from "./views/pkg-history/pkg-history.component";
import { PkgHistoryServiceComponent } from "./views/pkg-history-service/pkg-history-service.component";
import { ViewServiceImagesComponent } from "./views/view-service-images/view-service-images.component";
import { ForgotPasswordComponent } from "./views/forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "forgotpwd",
    component: ForgotPasswordComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "dashboard/profile",
    component: ProfileComponent,
  },
  {
    path: "dashboard/feedback",
    component: FeedbackComponent,
  },
  {
    path: "dashboard/manageEmployees",
    component: ManageEmpComponent,
  },
  {
    path: "dashboard/manageEmployees/updateEmployees",
    component: UpdateEmpComponent,
  },
  {
    path: "dashboard/manageEmployees/addEmployees",
    component: AddEmpComponent,
  },
  {
    path: "dashboard/manageEmployees/deleteEmployees",
    component: DeleteempComponent,
  },
  {
    path: "dashboard/managePackages",
    component: ManagePkgsComponent,
  },
  {
    path: "dashboard/managePackages/addPackage",
    component: AddPkgComponent,
  },
  {
    path: "dashboard/managePackages/updatePackage/:id",
    component: UpdatePkgComponent,
  },
  {
    path: "dashboard/manageServices",
    component: ManageServicesComponent,
  },
  {
    path: "dashboard/manageServices/serviceList",
    component: ServiceListComponent,
  },
  {
    path: "dashboard/manageUsers",
    component: ManageUsersComponent,
  },
  {
    path: "dashboard/viewHistory",
    component: ViewHistoryComponent,
  },
  {
    path: "dashboard/viewHistory/viewPackages",
    component: ViewServicesComponent,
  },
  {
    path: "dashboard/manageUsers/viewPkgHistory",
    component: PkgHistoryComponent,
  },
  {
    path: "dashboard/manageUsers/viewPkgHistory/viewPkgHistoryService",
    component: PkgHistoryServiceComponent,
  },
  {
    path: "dashboard/manageServices/serviceImages",
    component: ViewServiceImagesComponent,
  },
  {
    path: "**",
    //Page Not Found Component
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
