import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMemberProfileComponent } from './my-member-profile.component';

describe('MyMemberProfileComponent', () => {
  let component: MyMemberProfileComponent;
  let fixture: ComponentFixture<MyMemberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMemberProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
