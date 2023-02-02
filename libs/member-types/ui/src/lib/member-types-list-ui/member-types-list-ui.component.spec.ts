import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypesListUiComponent } from './member-types-list-ui.component';

describe('MemberTypesListUiComponent', () => {
  let component: MemberTypesListUiComponent;
  let fixture: ComponentFixture<MemberTypesListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypesListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
