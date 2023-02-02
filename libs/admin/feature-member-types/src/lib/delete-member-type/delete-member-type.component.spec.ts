import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMemberTypeComponent } from './delete-member-type.component';

describe('DeleteMemberTypeComponent', () => {
  let component: DeleteMemberTypeComponent;
  let fixture: ComponentFixture<DeleteMemberTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMemberTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMemberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
