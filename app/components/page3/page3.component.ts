import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Database } from "../../providers/database/database"

@Component({
    selector: "page3",
    templateUrl: "./components/page3/page3.component.html",
})

export class Page3Component implements OnInit {
    public firstname: string;
    public lastname: string;

    public constructor(private location: Location, private database: Database) {
        this.firstname = "";
        this.lastname = "";
    };

    public ngOnInit() {

    }

    public save(){
        if(this.firstname && this.lastname) {
            this.database.getStorage().createDocument({
                "firstname": this.firstname,
                "lastname": this.lastname
            });
            this.location.back();
        }
    }
}
