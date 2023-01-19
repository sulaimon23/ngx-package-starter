import { NgModule } from '@angular/core';
import { DesignLibComponent } from './design-lib.component';
import { ButtonComponent } from './button/button.component';
import { CardHeaderDirective, CardContentDirective, CardImageDirective, CardFooterDirective } from './directives/directives.component';



@NgModule({
    declarations: [
        DesignLibComponent,
        ButtonComponent,
    ],
    imports: [
        CardHeaderDirective,
        CardContentDirective,
        CardImageDirective,
        CardFooterDirective
    ],
    exports: [
        DesignLibComponent,
        ButtonComponent,
        CardHeaderDirective,
        CardContentDirective,
        CardImageDirective,
        CardFooterDirective
    ]
})
export class DesignLibModule { }
