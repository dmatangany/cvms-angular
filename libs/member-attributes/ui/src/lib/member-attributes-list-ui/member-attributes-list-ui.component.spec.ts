import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAttributesListUiComponent } from './member-attributes-list-ui.component';

describe('MemberAttributesListUiComponent', () => {
  let component: MemberAttributesListUiComponent;
  let fixture: ComponentFixture<MemberAttributesListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAttributesListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAttributesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
