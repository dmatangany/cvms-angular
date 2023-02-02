import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfilesDetailsComponent } from './member-profiles-details.component';

describe('MemberProfilesDetailsComponent', () => {
  let component: MemberProfilesDetailsComponent;
  let fixture: ComponentFixture<MemberProfilesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberProfilesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfilesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
