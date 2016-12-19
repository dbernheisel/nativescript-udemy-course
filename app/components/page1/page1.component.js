"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var Platform = require("platform");
var Application = require("application");
var jsSHA = require("jssha");
var Page1Component = (function () {
    function Page1Component(router, location, database) {
        this.router = router;
        this.location = location;
        this.database = database;
        this.people = [];
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function () {
            _this.loadData();
            // this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
            // this.people = this.storage;
        });
        // this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
        // this.people = this.storage;
        this.loadData();
    };
    Page1Component.prototype.loadData = function () {
        this.people = [];
        var rows = this.database.getStorage().executeQuery("people");
        for (var i = 0; i < rows.length; i++) {
            this.people.push(rows[i]);
        }
    };
    Page1Component.prototype.hashName = function (value) {
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update(value);
        return shaObj.getHash("HEX");
    };
    Page1Component.prototype.goToNextPage = function (fullName) {
        var navigationExtras = {
            queryParams: {
                "name": fullName
            }
        };
        this.router.navigate(["page2"], navigationExtras);
    };
    Page1Component.prototype.getApplicationVersion = function () {
        if (Platform.isAndroid) {
            var PackageManager = android.content.pm.PackageManager;
            var pkg = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), PackageManager.GET_META_DATA);
            return java.lang.Integer.toString(pkg.versionCode);
        }
        else {
            var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        }
    };
    Page1Component.prototype.addUserData = function () {
        this.router.navigate(["page3"]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./components/page1/page1.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, database_1.Database])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map