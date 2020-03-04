import { __decorate } from "tslib";
import { Component } from "@angular/core";
//import { Router } from "@angular/router";
let AppComponent = class AppComponent {
    constructor() {
        this.searchTerm = "";
        this.isCollapsed = true;
    }
    //constructor(private router: Router) {}
    get token() {
        return localStorage.getItem("token");
    }
    collapse() {
        this.isCollapsed = true;
    }
    closeDropdown(dropdown) {
        dropdown.close();
    }
    logout() {
        //localStorage.clear();
        //this.router.navigate([""]);
    }
    search() { }
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.scss"]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map