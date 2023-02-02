import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAttributesFormComponent } from './member-attributes-form.component';

describe('MemberAttributesFormComponent', () => {
  let component: MemberAttributesFormComponent;
  let fixture: ComponentFixture<MemberAttributesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAttributesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAttributesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
