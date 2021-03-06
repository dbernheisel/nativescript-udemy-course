import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutes, AppComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { Database } from "./providers/database/database";

@NgModule({
    declarations: [AppComponent, ...AppComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [Database]
})
export class AppModule { }
