import { Injectable } from "@angular/core";
import { Couchbase } from "nativescript-couchbase";
Injectable()

export class Database {
    private storage: any;
    private isInstatiated: boolean;

    public constructor() {
        if(!this.isInstatiated) {
            this.storage = new Couchbase("myproject");
            this.storage.createView("people", "1", (document, emitter) => {
                emitter.emit(document._id, document);
            })
            this.isInstatiated = true;
        }
    }

    public getStorage() {
        return this.storage;
    }
}
