import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
//import { RegistrationComponent } from "./registration/registration.component";
//import { LoginComponent } from './login/login.component';
//mport { AuthGuardService } from './auth-guard.service';
const routes = [
    {
        path: "",
        component: HomeComponent
    },
    /*  {
      path: 'register',
      component: RegistrationComponent,
      canActivate: [AuthGuardService],
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthGuardService],
    }, */
    {
        path: "**",
        redirectTo: ""
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map