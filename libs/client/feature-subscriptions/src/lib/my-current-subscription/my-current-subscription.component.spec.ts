import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurrentSubscriptionComponent } from './my-current-subscription.component';

describe('MyCurrentSubscriptionComponent', () => {
  let component: MyCurrentSubscriptionComponent;
  let fixture: ComponentFixture<MyCurrentSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCurrentSubscriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCurrentSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
