"use strict";
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var common_1 = require("@angular/common");
var Page3Component = (function () {
    function Page3Component(location) {
        this.location = location;
        this.firstname = "";
        this.lastname = "";
        this.storage = [];
    }
    ;
    Page3Component.prototype.ngOnInit = function () {
        this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
    };
    Page3Component.prototype.save = function () {
        if (this.firstname && this.lastname) {
            this.storage.push({
                "firstname": this.firstname,
                "lastname": this.lastname
            });
            ApplicationSettings.setString("data", JSON.stringify(this.storage));
            this.location.back();
        }
    };
    Page3Component = __decorate([
        core_1.Component({
            selector: "page3",
            templateUrl: "./components/page3/page3.component.html",
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], Page3Component);
    return Page3Component;
}());
exports.Page3Component = Page3Component;
//# sourceMappingURL=page3.component.js.map