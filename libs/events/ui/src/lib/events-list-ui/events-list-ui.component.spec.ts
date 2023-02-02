import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListUiComponent } from './events-list-ui.component';

describe('EventsListUiComponent', () => {
  let component: EventsListUiComponent;
  let fixture: ComponentFixture<EventsListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
