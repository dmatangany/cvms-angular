import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccountsListUiComponent } from './member-accounts-list-ui.component';

describe('MemberAccountsListUiComponent', () => {
  let component: MemberAccountsListUiComponent;
  let fixture: ComponentFixture<MemberAccountsListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAccountsListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccountsListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
