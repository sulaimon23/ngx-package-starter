import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignLibModule } from "design-lib";
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component'

// 
// 
@NgModule({
    declarations: [
        AppComponent,
        WidgetOneComponent,
        WidgetTwoComponent
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
