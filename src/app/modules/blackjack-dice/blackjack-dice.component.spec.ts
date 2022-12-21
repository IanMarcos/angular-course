import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackDiceComponent } from './blackjack-dice.component';

describe('BlackjackDiceComponent', () => {
  let component: BlackjackDiceComponent;
  let fixture: ComponentFixture<BlackjackDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackjackDiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackjackDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
