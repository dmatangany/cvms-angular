import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberAttributeComponent } from './add-member-attribute.component';

describe('AddMemberAttributeComponent', () => {
  let component: AddMemberAttributeComponent;
  let fixture: ComponentFixture<AddMemberAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMemberAttributeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMemberAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
