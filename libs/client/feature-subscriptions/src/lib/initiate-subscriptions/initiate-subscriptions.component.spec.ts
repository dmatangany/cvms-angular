import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateSubscriptionsComponent } from './initiate-subscriptions.component';

describe('InitiateSubscriptionsComponent', () => {
  let component: InitiateSubscriptionsComponent;
  let fixture: ComponentFixture<InitiateSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiateSubscriptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiateSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
