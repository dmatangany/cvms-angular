import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberTypeComponent } from './view-member-type.component';

describe('ViewMemberTypeComponent', () => {
  let component: ViewMemberTypeComponent;
  let fixture: ComponentFixture<ViewMemberTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMemberTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
