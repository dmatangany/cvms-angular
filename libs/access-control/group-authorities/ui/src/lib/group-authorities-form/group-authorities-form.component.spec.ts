import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAuthoritiesFormComponent } from './group-authorities-form.component';

describe('GroupAuthoritiesFormComponent', () => {
  let component: GroupAuthoritiesFormComponent;
  let fixture: ComponentFixture<GroupAuthoritiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAuthoritiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAuthoritiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
