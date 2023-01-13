import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from './button/button.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule
    ],
    exports: [
        ButtonModule
    ]
})
export class SharedModule { }
