import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'membership-application-delete-events',
  templateUrl: './delete-events.component.html',
  styleUrls: ['./delete-events.component.css'],
})
export class DeleteEventsComponent {
  /* @Output() closeModal = new EventEmitter<boolean>();
  public selectedEventSubscription = new Subscription();
  public loadedEventSubscription = new Subscription();

  constructor(public eventsFacade: EventsFacade) {}

  ngOnInit(): void {}

  onSubmit() {
    this.selectedEventSubscription =
      this.eventsFacade.selectedEvent$.subscribe((event) => {
        this.eventsFacade.deleteEvent(event?.id!);
        this.loadedEventSubscription =
          this.eventsFacade.loaded$.subscribe((res) => {
            return res ? this.closeModal.emit(true) : null;
          });
      });
  }

  ngOnDestroy() {
    this.selectedEventSubscription.unsubscribe();
    this.loadedEventSubscription.unsubscribe();
  }*/
}
