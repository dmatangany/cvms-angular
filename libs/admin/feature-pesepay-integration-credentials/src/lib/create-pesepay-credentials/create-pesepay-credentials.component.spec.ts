import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePesepayCredentialsComponent } from './create-pesepay-credentials.component';

describe('CreatePesepayCredentialsComponent', () => {
  let component: CreatePesepayCredentialsComponent;
  let fixture: ComponentFixture<CreatePesepayCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePesepayCredentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePesepayCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
