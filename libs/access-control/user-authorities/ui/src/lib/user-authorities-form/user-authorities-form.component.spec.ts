import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthoritiesFormComponent } from './user-authorities-form.component';

describe('UserAuthoritiesFormComponent', () => {
  let component: UserAuthoritiesFormComponent;
  let fixture: ComponentFixture<UserAuthoritiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthoritiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthoritiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
