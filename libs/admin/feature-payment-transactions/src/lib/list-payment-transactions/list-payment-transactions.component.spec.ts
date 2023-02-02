import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentTransactionsComponent } from './list-payment-transactions.component';

describe('ListPaymentTransactionsComponent', () => {
  let component: ListPaymentTransactionsComponent;
  let fixture: ComponentFixture<ListPaymentTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
