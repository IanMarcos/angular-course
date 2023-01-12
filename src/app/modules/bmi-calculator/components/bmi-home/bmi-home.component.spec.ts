import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiHomeComponent } from './bmi-home.component';

describe('BmiHomeComponent', () => {
  let component: BmiHomeComponent;
  let fixture: ComponentFixture<BmiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
