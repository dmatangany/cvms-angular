import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { EventPackagesEntity } from '../+state/event-packages.models';

@Injectable({
  providedIn: 'root',
})
export class EventPackagesService {
  constructor(private apiService: ApiService) {}

  getPaginatedEventPackages(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<EventPackagesEntity>>(
      `/v1/event-packages`,
      httpParams
    );
  }

  createEventPackage(eventPackage: EventPackagesEntity) {
    return this.apiService.post<EventPackagesEntity>(
      `/v1/event-packages`,
      eventPackage
    );
  }

  deleteEventPackage(eventPackageId: string | number) {
    return this.apiService.delete<EventPackagesEntity>(
      `/v1/event-packages/${eventPackageId}`
    );
  }

  updateEventPackage(eventPackage: any) {
    return this.apiService.put<EventPackagesEntity>(
      `/v1/event-packages/${eventPackage.eventId}`,
      eventPackage
    );
  }

  getEventPackageById(eventPackageId: string | number) {
    return this.apiService.get<EventPackagesEntity>(
      `/v1/event-packages/${eventPackageId}`
    );
  }

  getAllEventPackages(eventId: any) {
    return this.apiService.get<EventPackagesEntity[]>(
      `/v1/events/${eventId}/event-packages`
    );
  }
}
