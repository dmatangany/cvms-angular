import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransactionsUiComponent } from './payment-transactions-ui.component';

describe('PaymentTransactionsUiComponent', () => {
  let component: PaymentTransactionsUiComponent;
  let fixture: ComponentFixture<PaymentTransactionsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTransactionsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTransactionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
