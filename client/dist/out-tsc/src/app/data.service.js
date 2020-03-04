import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { NavigationStart } from "@angular/router";
//import { RestApiService } from "./rest-api.service";
let DataService = class DataService {
    constructor(router) {
        this.router = router;
        this.message = "";
        this.messageType = "danger";
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.message = "";
            }
        });
    }
    error(message) {
        this.messageType = "danger";
        this.message = message;
    }
    success(message) {
        this.messageType = "success";
        this.message = message;
    }
    warning(message) {
        this.messageType = "warning";
        this.message = message;
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map