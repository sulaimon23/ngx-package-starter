import { NgModule } from '@angular/core';
import { DesignLibComponent } from './design-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
    declarations: [
        DesignLibComponent,
        ButtonComponent,
    ],
    imports: [
    ],
    exports: [
        DesignLibComponent,
        ButtonComponent
    ]
})
export class DesignLibModule { }
