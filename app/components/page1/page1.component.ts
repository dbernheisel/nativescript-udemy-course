import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Location } from "@angular/common"
import { Couchbase } from "nativescript-couchbase";
var jsSHA = require("jssha");

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.component.html",
})
export class Page1Component implements OnInit {

    public people: Array<any>;
    private storage: any;
    private database: any;

    public constructor(private router: Router, private location: Location) {
        this.people = [];
        this.storage = [];
        this.database = new Couchbase("myproject");
        this.database.createView("people", "1", (document, emitter) => {
            emitter.emit(document._id, document);
        })
    }

    public ngOnInit() {
        this.location.subscribe(() => {
            this.loadData();
            // this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
            // this.people = this.storage;
        });
        // this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
        // this.people = this.storage;
        this.loadData();
    }

    public loadData() {
        this.people = [];
        let rows = this.database.executeQuery("people");
        for(let i = 0; i < rows.length; i++) {
            this.people.push(rows[i]);
        }
    }

    public hashName(value: string): string {
        let shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update(value);
        return shaObj.getHash("HEX");
    }

    public goToNextPage(fullName: string) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "name": fullName
            }
        }
        this.router.navigate(["page2"], navigationExtras);
    }

    public addUserData() {
        this.router.navigate(["page3"]);
    }

}
