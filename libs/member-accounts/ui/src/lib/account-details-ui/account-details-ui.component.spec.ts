import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsUiComponent } from './account-details-ui.component';

describe('AccountDetailsUiComponent', () => {
  let component: AccountDetailsUiComponent;
  let fixture: ComponentFixture<AccountDetailsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
