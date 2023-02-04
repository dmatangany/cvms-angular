import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberProfilesByGroupComponent } from './list-member-profiles-by-group.component';

describe('ListUsersByGroupComponent', () => {
  let component: ListMemberProfilesByGroupComponent;
  let fixture: ComponentFixture<ListMemberProfilesByGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMemberProfilesByGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListMemberProfilesByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
