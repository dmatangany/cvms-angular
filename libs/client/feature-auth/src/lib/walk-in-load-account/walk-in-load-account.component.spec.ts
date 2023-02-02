import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInLoadAccountComponent } from './walk-in-load-account.component';

describe('WalkInLoadAccountComponent', () => {
  let component: WalkInLoadAccountComponent;
  let fixture: ComponentFixture<WalkInLoadAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalkInLoadAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WalkInLoadAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
