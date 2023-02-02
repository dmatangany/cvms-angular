import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateSubscriptionsFormComponent } from './initiate-subscriptions-form.component';

describe('InitiateSubscriptionsFormComponent', () => {
  let component: InitiateSubscriptionsFormComponent;
  let fixture: ComponentFixture<InitiateSubscriptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiateSubscriptionsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiateSubscriptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
