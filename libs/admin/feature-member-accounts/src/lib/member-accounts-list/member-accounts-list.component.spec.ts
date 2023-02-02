import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccountsListComponent } from './member-accounts-list.component';

describe('MemberAccountsListComponent', () => {
  let component: MemberAccountsListComponent;
  let fixture: ComponentFixture<MemberAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAccountsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
