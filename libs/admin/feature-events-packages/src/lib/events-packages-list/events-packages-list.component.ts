import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  EventPackagesFacade,
  EventPackagesEntity,
} from '@membership-application/event-packages/data-access';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'membership-application-events-packages-list',
  templateUrl: './events-packages-list.component.html',
  styleUrls: ['./events-packages-list.component.css'],
})
export class EventsPackagesListComponent implements OnInit, AfterViewChecked {
  public isCreate = false;
  public isUpdate = false;
  public isDelete = false;
  public selectedEventPackage!: EventPackagesEntity;

  public placeholderMessage = 'Event Packages';

  constructor(
    public eventPackagesFacade: EventPackagesFacade,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEventPackages();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getEventPackages() {
    this.eventPackagesFacade.getAllEventPackages(
      this.route.snapshot.paramMap.get('eventId')!
    );
  }

  refresh(isRefresh: boolean) {
    this.isCreate = false;
    this.isUpdate = false;
    this.isDelete = false;
    return isRefresh ? this.getEventPackages() : null;
  }

  updateEventPackage(eventPackage: EventPackagesEntity) {
    this.selectedEventPackage = eventPackage;
    this.isUpdate = true;
    this.cdr.detectChanges();
  }

  deleteEventPackage(eventPackage: EventPackagesEntity) {
    this.selectedEventPackage = eventPackage;
    this.isDelete = true;
    this.cdr.detectChanges();
  }
}
