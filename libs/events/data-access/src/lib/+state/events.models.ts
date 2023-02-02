import { CategoriesEntity } from '@membership-application/categories/data-access';

export interface EndTimeOfEvent {
  hour: number;
  minute: number;
  nano: number;
  second: number;
}

export interface StartTimeOfEvent {
  hour: number;
  minute: number;
  nano: number;
  second: number;
}

export interface EventsEntity {
  category: CategoriesEntity;
  city: string;
  country: string;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  description: string;
  endDateOfEvent: string;
  endTimeOfEvent: EndTimeOfEvent;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  latitude: number;
  location: string;
  longitude: number;
  maximumNumberOfAttendees: number;
  name: string;
  startDateOfEvent: string;
  startTimeOfEvent: StartTimeOfEvent;
  version: number;
  published: boolean;
}
