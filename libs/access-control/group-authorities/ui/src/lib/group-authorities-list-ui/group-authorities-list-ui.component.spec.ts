import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAuthoritiesListUiComponent } from './group-authorities-list-ui.component';

describe('GroupAuthoritiesListUiComponent', () => {
  let component: GroupAuthoritiesListUiComponent;
  let fixture: ComponentFixture<GroupAuthoritiesListUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAuthoritiesListUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAuthoritiesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
