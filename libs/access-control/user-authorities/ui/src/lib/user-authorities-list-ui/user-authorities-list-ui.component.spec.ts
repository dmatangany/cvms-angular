import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthoritiesListUiComponent } from './user-authorities-list-ui.component';

describe('UserAuthoritiesListUiComponent', () => {
  let component: UserAuthoritiesListUiComponent;
  let fixture: ComponentFixture<UserAuthoritiesListUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthoritiesListUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthoritiesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
