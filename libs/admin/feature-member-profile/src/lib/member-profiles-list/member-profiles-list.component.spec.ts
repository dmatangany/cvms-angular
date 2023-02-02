import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfilesListComponent } from './member-profiles-list.component';

describe('MemberProfilesListComponent', () => {
  let component: MemberProfilesListComponent;
  let fixture: ComponentFixture<MemberProfilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberProfilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
