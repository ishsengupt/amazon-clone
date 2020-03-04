import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let RestApiService = class RestApiService {
    constructor(http) {
        this.http = http;
    }
    get(link) {
        return this.http.get(link).toPromise();
    }
    post(link, body) {
        return this.http.post(link, body).toPromise();
    }
};
RestApiService = __decorate([
    Injectable()
], RestApiService);
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map