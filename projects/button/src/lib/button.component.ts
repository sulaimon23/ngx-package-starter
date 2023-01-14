import { Component } from '@angular/core';

@Component({
    selector: 'lib-button',
    templateUrl: './button.component.html',
    styles: [
    ]
})


export class ButtonComponent {
    greet(): void {
        alert("Hello!");
    }
}
