import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventsDataAccessModule } from '@membership-application/events/data-access';
import { EventsUiModule } from '@membership-application/events/ui';
import { SubscribeEventComponent } from './subscribe-event/subscribe-event.component';
import { EventPackagesDataAccessModule } from '@membership-application/event-packages/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    EventsDataAccessModule,
    EventsUiModule,
    EventPackagesDataAccessModule,
    RouterModule.forChild([{ path: '', component: EventsCalendarComponent }]),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [EventsCalendarComponent, SubscribeEventComponent],
})
export class ClientFeatureEventsModule {}
