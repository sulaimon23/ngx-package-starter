import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styles: [
    ]
})


export class ButtonComponent {
    greet(): void {
        alert("Hello!");
    }
}
