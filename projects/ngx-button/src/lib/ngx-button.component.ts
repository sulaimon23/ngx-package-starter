import { Component } from '@angular/core';

@Component({
    selector: 'lib-ngx-button',
    templateUrl: './ngx-button.component.html',
    styles: [
    ]
})
export class NgxButtonComponent {
    greet(): void {
        alert("Hello!");
    }
}
