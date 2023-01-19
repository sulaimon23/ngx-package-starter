import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignLibModule } from "design-lib"

// 
// 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DesignLibModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
