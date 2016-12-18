import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.component.html",
})
export class Page1Component implements OnInit {
    public people: Array<any>;

    public constructor(private router: Router) {
        this.people = [];
    }

    public goToNextPage(fullName: string) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "name": fullName
            }
        }
        this.router.navigate(["page2"], navigationExtras);
    }

    public ngOnInit() {
        this.people.push({
            "firstname": "David",
            "lastname": "Bernheisel"
        });
        this.people.push({
            "firstname": "Foo",
            "lastname": "Bear"
        });
        
    }
}
