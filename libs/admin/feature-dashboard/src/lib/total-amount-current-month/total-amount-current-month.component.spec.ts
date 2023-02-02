import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountCurrentMonthComponent } from './total-amount-current-month.component';

describe('TotalAmountCurrentMonthComponent', () => {
  let component: TotalAmountCurrentMonthComponent;
  let fixture: ComponentFixture<TotalAmountCurrentMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalAmountCurrentMonthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalAmountCurrentMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
