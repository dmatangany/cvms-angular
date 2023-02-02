import { Router } from '@angular/router';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  EventsFacade,
  EventsEntity,
} from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit, AfterViewChecked {
  public placeholderMessage: string | undefined;
  public isUpdate = false;
  public isCreate = false;
  public isDelete = false;
  selectedEvent!: EventsEntity;
  isUnpublish = false;
  isPublish = false;

  constructor(
    public eventsFacade: EventsFacade,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  public getEventList(state: ClrDatagridStateInterface) {
    this.eventsFacade.getPaginatedEvents(state);
    this.cdr.detectChanges();
  }

  refresh(isRefresh: boolean) {
    this.isUpdate = false;
    this.isCreate = false;
    this.isDelete = false;
    this.isPublish = false;
    this.isUnpublish = false;
    return isRefresh ? this.getEventList({}) : null;
  }

  updateEvent(event: EventsEntity) {
    this.selectedEvent = event;
    this.isUpdate = true;
  }

  deleteEvent(event: EventsEntity) {
    this.selectedEvent = event;
    this.isDelete = true;
  }

  publishSelectedEvent(event: EventsEntity) {
    this.selectedEvent = event;
    this.isPublish = true;
  }

  unpublishSelectedEvent(event: EventsEntity) {
    this.selectedEvent = event;
    this.isUnpublish = true;
  }

  viewAvailablePackages(event: EventsEntity) {
    this.router.navigate(['/events/packages', event?.id]);
  }
}
