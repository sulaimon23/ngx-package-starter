import { Component, ViewEncapsulation } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title: string = 'design-system';
    interval: number = 1000;
    delay: number = 2000;
    component = [
        WidgetOneComponent,
        WidgetTwoComponent
    ]
}
