import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesepayCredentialsFormComponent } from './pesepay-credentials-form.component';

describe('PesepayCredentialsFormComponent', () => {
  let component: PesepayCredentialsFormComponent;
  let fixture: ComponentFixture<PesepayCredentialsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesepayCredentialsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesepayCredentialsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
