import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberProfileComponent } from './update-member-profile.component';

describe('UpdateMemberProfileComponent', () => {
  let component: UpdateMemberProfileComponent;
  let fixture: ComponentFixture<UpdateMemberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemberProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
