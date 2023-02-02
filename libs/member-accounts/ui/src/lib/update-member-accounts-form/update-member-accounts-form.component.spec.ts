import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberAccountsFormComponent } from './update-member-accounts-form.component';

describe('UpdateMemberAccountsFormComponent', () => {
  let component: UpdateMemberAccountsFormComponent;
  let fixture: ComponentFixture<UpdateMemberAccountsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemberAccountsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberAccountsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
