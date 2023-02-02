import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesepayCredentialsComponent } from './list-pesepay-credentials.component';

describe('ListPesepayCredentialsComponent', () => {
  let component: ListPesepayCredentialsComponent;
  let fixture: ComponentFixture<ListPesepayCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPesepayCredentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPesepayCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
