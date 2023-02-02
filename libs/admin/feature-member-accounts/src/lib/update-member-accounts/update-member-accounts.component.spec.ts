import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberAccountsComponent } from './update-member-accounts.component';

describe('UpdateMemberAccountsComponent', () => {
  let component: UpdateMemberAccountsComponent;
  let fixture: ComponentFixture<UpdateMemberAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemberAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
