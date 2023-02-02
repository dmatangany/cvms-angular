import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPackagesFormComponent } from './events-packages-form.component';

describe('EventsPackagesFormComponent', () => {
  let component: EventsPackagesFormComponent;
  let fixture: ComponentFixture<EventsPackagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsPackagesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPackagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
