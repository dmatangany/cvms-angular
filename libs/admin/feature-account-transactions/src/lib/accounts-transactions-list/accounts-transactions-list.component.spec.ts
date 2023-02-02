import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTransactionsListComponent } from './accounts-transactions-list.component';

describe('AccountsTransactionsListComponent', () => {
  let component: AccountsTransactionsListComponent;
  let fixture: ComponentFixture<AccountsTransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsTransactionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
