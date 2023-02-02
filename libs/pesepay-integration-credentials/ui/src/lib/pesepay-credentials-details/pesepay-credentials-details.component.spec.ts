import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesepayCredentialsDetailsComponent } from './pesepay-credentials-details.component';

describe('PesepayCredentialsDetailsComponent', () => {
  let component: PesepayCredentialsDetailsComponent;
  let fixture: ComponentFixture<PesepayCredentialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesepayCredentialsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesepayCredentialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
