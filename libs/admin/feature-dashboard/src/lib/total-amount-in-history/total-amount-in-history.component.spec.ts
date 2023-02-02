import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountInHistoryComponent } from './total-amount-in-history.component';

describe('TotalAmountInHistoryComponent', () => {
  let component: TotalAmountInHistoryComponent;
  let fixture: ComponentFixture<TotalAmountInHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalAmountInHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalAmountInHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
