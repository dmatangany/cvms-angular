import { EventsListUiComponent } from './events-list-ui/events-list-ui.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { EventsFormComponent } from './events-form/events-form.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsCalenderUiComponent } from './events-calender-ui/events-calender-ui.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventsSubscriptionsUiComponent } from './events-subscriptions-ui/events-subscriptions-ui.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    EventsListUiComponent,
    EventsFormComponent,
    EventsDetailsComponent,
    EventsCalenderUiComponent,
    EventsSubscriptionsUiComponent,
  ],
  exports: [
    EventsListUiComponent,
    EventsFormComponent,
    EventsDetailsComponent,
    EventsCalenderUiComponent,
    EventsSubscriptionsUiComponent,
  ],
})
export class EventsUiModule {}
