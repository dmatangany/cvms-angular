import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfilesContainerComponent } from './member-profiles-container.component';

describe('MemberProfilesContainerComponent', () => {
  let component: MemberProfilesContainerComponent;
  let fixture: ComponentFixture<MemberProfilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberProfilesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberProfilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
