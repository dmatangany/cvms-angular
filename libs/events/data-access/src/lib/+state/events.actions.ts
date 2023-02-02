import { createAction, props } from '@ngrx/store';
import { EventsEntity } from './events.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const getPaginatedEvents = createAction(
  '[Events] Get Paginated Events',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedEventsSuccess = createAction(
  '[Events] Get Paginated Events Success',
  props<{ events: EventsEntity[]; total: number; page: number }>()
);

export const getPaginatedEventsFailure = createAction(
  '[Events] Get Paginated Events Failure',
  props<{ error: Error }>()
);

export const getAllEvents = createAction('[Events] Get All Events');

export const getAllEventsSuccess = createAction(
  '[Events] Get All Events Success',
  props<{ events: EventsEntity[] }>()
);

export const getAllEventsFailure = createAction(
  '[Events] Get All Events Failure',
  props<{ error: Error }>()
);

export const getEventById = createAction(
  '[Events] Get Event',
  props<{ eventId: string | number }>()
);

export const getEventByIdSuccess = createAction(
  '[Events] Get Event Success',
  props<{ event: EventsEntity }>()
);

export const getEventByIdFailure = createAction(
  '[Events] Get Event Failure',
  props<{ error: any }>()
);

export const createEvent = createAction(
  '[Events] Create Event',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const createEventSuccess = createAction(
  '[Events] Create Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const createEventFailure = createAction(
  '[Events] Create Event Failure',
  props<{ error: Error }>()
);

export const deleteEvent = createAction(
  '[Events] Delete Event',
  props<{ eventId: string | number }>()
);

export const deleteEventSuccess = createAction('[Events] Delete Event Success');

export const deleteEventFailure = createAction(
  '[Events] Delete Event Failure',
  props<{ error: Error }>()
);

export const updateEvent = createAction(
  '[Events] Update Event',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const updateEventSuccess = createAction(
  '[Events] Update Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const updateEventFailure = createAction(
  '[Events] Update Event Failure',
  props<{ error: Error }>()
);

export const subscribeToAnEvent = createAction(
  '[Events] Subcribe To An Event',
  props<{ eventId: string | number }>()
);

export const subscribeToAnEventSuccess = createAction(
  '[Events] Subcribe To An Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const subscribeToAnEventFailure = createAction(
  '[Events] Subcribe To An Event Failure',
  props<{ error: Error }>()
);

export const unSubscribeToAnEvent = createAction(
  '[Events] Unsubcribe To An Event',
  props<{ eventId: string | number }>()
);

export const unSubscribeToAnEventSuccess = createAction(
  '[Events] Unsubcribe To An Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const unSubscribeToAnEventFailure = createAction(
  '[Events] Unsubcribe To An Event Failure',
  props<{ error: Error }>()
);

export const publishEvent = createAction(
  '[Events] Publish Event',
  props<{ eventId: string | number }>()
);

export const publishEventSuccess = createAction(
  '[Events] Publish Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const publishEventFailure = createAction(
  '[Events] Publish Event Failure',
  props<{ error: Error }>()
);

export const unPublishEvent = createAction(
  '[Events] Unpublish Event',
  props<{ eventId: string | number }>()
);

export const unPublishEventSuccess = createAction(
  '[Events] Unpublish Event Success',
  (eventDetails: EventsEntity) => ({ eventDetails })
);

export const unPublishEventFailure = createAction(
  '[Events] Unpublish Event Failure',
  props<{ error: Error }>()
);
