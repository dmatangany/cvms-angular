import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountCurrentYearComponent } from './total-amount-current-year.component';

describe('TotalAmountCurrentYearComponent', () => {
  let component: TotalAmountCurrentYearComponent;
  let fixture: ComponentFixture<TotalAmountCurrentYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalAmountCurrentYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalAmountCurrentYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
