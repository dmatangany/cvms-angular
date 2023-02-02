import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMemberUserProfileComponent } from './my-member-user-profile.component';

describe('MyMemberProfileComponent', () => {
  let component: MyMemberUserProfileComponent;
  let fixture: ComponentFixture<MyMemberUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMemberUserProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMemberUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
