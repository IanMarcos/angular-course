import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListMainComponent } from './employee-list-main.component';

describe('EmployeeListMainComponent', () => {
  let component: EmployeeListMainComponent;
  let fixture: ComponentFixture<EmployeeListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
