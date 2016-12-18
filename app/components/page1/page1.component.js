"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
        this.people = [];
    }
    Page1Component.prototype.goToNextPage = function (fullName) {
        var navigationExtras = {
            queryParams: {
                "name": fullName
            }
        };
        this.router.navigate(["page2"], navigationExtras);
    };
    Page1Component.prototype.ngOnInit = function () {
        this.people.push({
            "firstname": "David",
            "lastname": "Bernheisel"
        });
        this.people.push({
            "firstname": "Lacey",
            "lastname": "Rice"
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./components/page1/page1.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map