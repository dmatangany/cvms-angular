import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import {
  EventsFacade,
  EventsEntity,
} from '@membership-application/events/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.scss'],
})
export class PublishEventComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() event!: EventsEntity;
  public loadedEventSubscription = new Subscription();

  constructor(public eventsFacade: EventsFacade) {}

  ngOnInit(): void {}

  onSubmit() {
    this.eventsFacade.publishEvent(this.event.id);
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
