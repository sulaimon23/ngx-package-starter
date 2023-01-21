import { Component, QueryList, ComponentRef } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'design-system';
    component: any = [
        WidgetTwoComponent,
        WidgetOneComponent
    ]
}
