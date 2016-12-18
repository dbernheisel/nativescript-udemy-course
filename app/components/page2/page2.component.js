"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page2Component = (function () {
    function Page2Component(route) {
        this.route = route;
        this.fullName = "";
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.fullName = params["name"];
        });
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: "page2",
            templateUrl: "./components/page2/page2.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=page2.component.js.map