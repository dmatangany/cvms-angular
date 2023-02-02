import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  EventsEntity,
  EventsFacade,
} from '@membership-application/events/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-unpublish-event',
  templateUrl: './unpublish-event.component.html',
  styleUrls: ['./unpublish-event.component.scss'],
})
export class UnpublishEventComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() event!: EventsEntity;
  public loadedEventSubscription = new Subscription();

  constructor(public eventsFacade: EventsFacade) {}

  ngOnInit(): void {}

  onSubmit() {
    this.eventsFacade.unpublishEvent(this.event.id);
    this.loadedEventSubscription = this.eventsFacade.loaded$.subscribe(
      (res) => {
        return res ? this.closeModal.emit(true) : null;
      }
    );
  }

  ngOnDestroy() {
    this.loadedEventSubscription.unsubscribe();
  }
}
