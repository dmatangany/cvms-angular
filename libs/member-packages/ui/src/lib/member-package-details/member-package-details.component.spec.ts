import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPackageDetailsComponent } from './member-package-details.component';

describe('MemberPackageDetailsComponent', () => {
  let component: MemberPackageDetailsComponent;
  let fixture: ComponentFixture<MemberPackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPackageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
