import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Location } from "@angular/common"
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
import * as Platform from "platform";
import * as Application from "application";

import { Database } from "../../providers/database/database";

var jsSHA = require("jssha");

declare var android: any;
declare var java: any;
declare var NSBundle: any;

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.component.html",
})
export class Page1Component implements OnInit {

    public people: Array<any>;
    private storage: any;

    public constructor(private router: Router, private location: Location, private database: Database, private http: Http) {
        this.people = [];
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
        this.makeRemoteRequest();
    }

    public loadData() {
        this.people = [];
        let rows = this.database.getStorage().executeQuery("people");
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

    public getApplicationVersion(): string {
        if(Platform.isAndroid) {
            let PackageManager = android.content.pm.PackageManager;
            let pkg = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), PackageManager.GET_META_DATA);
            return java.lang.Integer.toString(pkg.versionCode);
        } else {
            let version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        }
    }

    public addUserData() {
        this.router.navigate(["page3"]);
    }

    public makeRemoteRequest() {
        let headers = new Headers({"Content-Type": "application/json"});
        let options = new RequestOptions({ headers: headers });
        this.http.post("https://httpbin.org/post", JSON.stringify({
            firstname: "Brad",
            lastname: "Martin"
        }), options)
        .map(result => result.json())
        .do(result => console.log(JSON.stringify(result)))
        .subscribe(result => {
            this.people.push(result.json);
        }, error => {
            console.log(error)
        })

    }

}
