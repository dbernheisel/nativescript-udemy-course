import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as ApplicationSettings from "application-settings"
import { Location } from "@angular/common"

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.component.html",
})
export class Page1Component implements OnInit {

    public people: Array<any>;
    private storage: any;

    public constructor(private router: Router, private location: Location) {
        this.people = [];
        this.storage = [];
    }

    public ngOnInit() {
        this.location.subscribe(() => {
            this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
            this.people = this.storage;
        });
        this.storage = JSON.parse(ApplicationSettings.getString("data", "[]"));
        this.people = this.storage;
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
