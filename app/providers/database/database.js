"use strict";
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
core_1.Injectable();
var Database = (function () {
    function Database() {
        if (!this.isInstatiated) {
            this.storage = new nativescript_couchbase_1.Couchbase("myproject");
            this.storage.createView("people", "1", function (document, emitter) {
                emitter.emit(document._id, document);
            });
            this.isInstatiated = true;
        }
    }
    Database.prototype.getStorage = function () {
        return this.storage;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=database.js.map