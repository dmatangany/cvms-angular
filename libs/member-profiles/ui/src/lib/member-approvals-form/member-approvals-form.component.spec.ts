import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberApprovalsFormComponent } from './member-approvals-form.component';

describe('MemberProfileFormComponent', () => {
  let component: MemberApprovalsFormComponent;
  let fixture: ComponentFixture<MemberApprovalsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberApprovalsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberApprovalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
