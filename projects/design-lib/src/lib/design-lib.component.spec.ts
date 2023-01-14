import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLibComponent } from './design-lib.component';

describe('DesignLibComponent', () => {
  let component: DesignLibComponent;
  let fixture: ComponentFixture<DesignLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
