import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPackagesListUiComponent } from './events-packages-list-ui.component';

describe('EventsPackagesListUiComponent', () => {
  let component: EventsPackagesListUiComponent;
  let fixture: ComponentFixture<EventsPackagesListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsPackagesListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPackagesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
