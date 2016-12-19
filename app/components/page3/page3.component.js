"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var Page3Component = (function () {
    function Page3Component(location) {
        this.location = location;
        this.firstname = "";
        this.lastname = "";
        this.database = new nativescript_couchbase_1.Couchbase("myproject");
    }
    ;
    Page3Component.prototype.ngOnInit = function () {
    };
    Page3Component.prototype.save = function () {
        if (this.firstname && this.lastname) {
            this.database.createDocument({
                "firstname": this.firstname,
                "lastname": this.lastname
            });
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