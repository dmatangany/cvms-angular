import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordFeatureComponent } from './forgot-password-feature.component';

describe('ForgotPasswordFeatureComponent', () => {
  let component: ForgotPasswordFeatureComponent;
  let fixture: ComponentFixture<ForgotPasswordFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
