import { NgModule } from '@angular/core';
import { DesignLibComponent } from './design-lib.component';
import { ButtonComponent } from './button/button.component';
import { CardHeaderDirective, CardContentDirective, CardImageDirective, CardFooterDirective } from './directives/directives.component';
import { CardComponent } from './card/card.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';



@NgModule({
    declarations: [
        DesignLibComponent,
        ButtonComponent,
        CardComponent,
        AdBannerComponent,
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
        AdBannerComponent,
        CardHeaderDirective,
        CardContentDirective,
        CardComponent,
        CardImageDirective,
        CardFooterDirective
    ]
})
export class DesignLibModule { }
