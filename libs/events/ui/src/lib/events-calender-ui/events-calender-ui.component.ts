import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  EventsEntity,
  EventsFacade,
} from '@membership-application/events/data-access';
import {
  CalendarView,
  CalendarEventAction,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';
import { startOfDay, endOfDay, isSameDay, isSameMonth } from 'date-fns';
import { EventColor } from 'calendar-utils';
import { Subject } from 'rxjs';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'membership-application-events-calender-ui',
  templateUrl: './events-calender-ui.component.html',
  styleUrls: ['./events-calender-ui.component.scss'],
})
export class EventsCalenderUiComponent implements OnChanges {
  @Input() myEvents: EventsEntity[] = [];
  @Output() handleSelectedEvent = new EventEmitter();

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;
  MyEvents: EventsEntity[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['myEvents'].currentValue) {
      this.myEvents.forEach((event) => {
        if (event.published) {
          this.events.push({
            id: event.id,
            title:
              event.name +
              ' from ' +
              event.startTimeOfEvent +
              ' to ' +
              event.endTimeOfEvent,
            start: new Date(event.startDateOfEvent),
            end: new Date(event.endDateOfEvent),
            color: colors['red'],
            draggable: false,
            resizable: {
              beforeStart: true,
              afterEnd: true,
            },
          });
        }
      });
      console.log(this.events);
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.handleSelectedEvent.emit(event);
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
