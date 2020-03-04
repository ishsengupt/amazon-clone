import { __decorate } from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { RestApiService } from "./rest-api.service";
import { MessageComponent } from "./message/message.component";
import { DataService } from "./data.service";
/*import { AuthGuardService } from "./auth-guard.service";

import { HomeComponent } from "./home/home.component";
import { MessageComponent } from "./message/message.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
 */
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, HomeComponent, MessageComponent],
        imports: [
            BrowserModule,
            AppRoutingModule,
            NgbModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [RestApiService, DataService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map