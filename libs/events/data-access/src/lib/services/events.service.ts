import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { EventsEntity } from '../+state/events.models';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private apiService: ApiService) {}

  getPaginatedEvents(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<EventsEntity>>(`/v1/events`, httpParams);
  }

  createEvent(eventDetails: EventsEntity) {
    return this.apiService.post<EventsEntity>(`/v1/events`, eventDetails);
  }

  getEvent(eventId: string | number) {
    return this.apiService.get<EventsEntity>(`/v1/events/${eventId}`);
  }

  updateEvent(eventDetails: EventsEntity) {
    return this.apiService.put<EventsEntity>(
      `/v1/events/${eventDetails.id}`,
      eventDetails
    );
  }

  deleteEvent(eventId: string | number) {
    return this.apiService.delete(`/v1/events/${eventId}`);
  }

  getAllEvents() {
    return this.apiService.get<EventsEntity[]>(`/v1/events/all`);
  }

  publishEvent(eventId: any) {
    return this.apiService.put<EventsEntity>(`/v1/events/${eventId}/publish`);
  }

  unPublishEvent(eventId: any) {
    return this.apiService.put<EventsEntity>(
      `/v1/events/${eventId}/un-publish`
    );
  }

  subscribeToAnEvent(eventId: any) {
    return this.apiService.put<EventsEntity>(`/v1/events/${eventId}/subscribe`);
  }

  unSubscribeToAnEvent(eventId: any) {
    return this.apiService.put<EventsEntity>(`/v1/events/${eventId}/unpublish`);
  }
}
