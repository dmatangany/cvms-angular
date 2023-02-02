import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFeatureComponent } from './reset-password-feature.component';

describe('ResetPasswordFeatureComponent', () => {
  let component: ResetPasswordFeatureComponent;
  let fixture: ComponentFixture<ResetPasswordFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
