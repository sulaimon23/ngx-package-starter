import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // console.log(fixture.nativeElement.querySelector('[data-test="button"]'));
        // console.log(fixture.nativeElement.querySelector('[data-test="mat"]'));
        expect(component).toBeTruthy();
    });
});
