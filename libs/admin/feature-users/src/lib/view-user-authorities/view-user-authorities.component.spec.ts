import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAuthoritiesComponent } from './view-user-authorities.component';

describe('ViewUserAuthoritiesComponent', () => {
  let component: ViewUserAuthoritiesComponent;
  let fixture: ComponentFixture<ViewUserAuthoritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAuthoritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
