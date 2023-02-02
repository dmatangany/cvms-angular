import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeFormComponent } from './member-type-form.component';

describe('MemberTypeFormComponent', () => {
  let component: MemberTypeFormComponent;
  let fixture: ComponentFixture<MemberTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
