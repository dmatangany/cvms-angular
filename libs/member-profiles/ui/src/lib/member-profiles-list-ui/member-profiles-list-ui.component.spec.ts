import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfilesListUiComponent } from './member-profiles-list-ui.component';

describe('MemberProfilesListUiComponent', () => {
  let component: MemberProfilesListUiComponent;
  let fixture: ComponentFixture<MemberProfilesListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberProfilesListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfilesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
