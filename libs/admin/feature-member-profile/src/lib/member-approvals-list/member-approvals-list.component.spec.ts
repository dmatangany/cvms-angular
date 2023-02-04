import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberApprovalsListComponent } from './member-approvals-list.component';

describe('MemberProfilesListComponent', () => {
  let component: MemberApprovalsListComponent;
  let fixture: ComponentFixture<MemberApprovalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberApprovalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberApprovalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
