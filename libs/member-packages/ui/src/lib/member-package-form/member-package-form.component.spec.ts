import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPackageFormComponent } from './member-package-form.component';

describe('MemberPackageFormComponent', () => {
  let component: MemberPackageFormComponent;
  let fixture: ComponentFixture<MemberPackageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPackageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
