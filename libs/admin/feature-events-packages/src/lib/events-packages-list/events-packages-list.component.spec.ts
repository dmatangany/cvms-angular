import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPackagesListComponent } from './events-packages-list.component';

describe('EventsPackagesListComponent', () => {
  let component: EventsPackagesListComponent;
  let fixture: ComponentFixture<EventsPackagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsPackagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPackagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
