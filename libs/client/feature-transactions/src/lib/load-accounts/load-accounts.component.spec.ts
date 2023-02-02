import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAccountsComponent } from './load-accounts.component';

describe('LoadAccountsComponent', () => {
  let component: LoadAccountsComponent;
  let fixture: ComponentFixture<LoadAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadAccountsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
