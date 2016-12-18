"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var common_1 = require("@angular/common");
var Page1Component = (function () {
    function Page1Component(router, location) {
        this.router = router;
        this.location = location;
        this.people = [];
        this.storage = [];
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function () {
            _this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
            _this.people = _this.storage;
        });
        this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
        this.people = this.storage;
    };
    Page1Component.prototype.goToNextPage = function (fullName) {
        var navigationExtras = {
            queryParams: {
                "name": fullName
            }
        };
        this.router.navigate(["page2"], navigationExtras);
    };
    Page1Component.prototype.addUserData = function () {
        this.router.navigate(["page3"]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./components/page1/page1.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map