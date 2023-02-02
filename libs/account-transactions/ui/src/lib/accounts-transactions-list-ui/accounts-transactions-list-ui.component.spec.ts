import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTransactionsListUiComponent } from './accounts-transactions-list-ui.component';

describe('AccountsTransactionsListUiComponent', () => {
  let component: AccountsTransactionsListUiComponent;
  let fixture: ComponentFixture<AccountsTransactionsListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsTransactionsListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTransactionsListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
