import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { CategoriesFacade } from '@membership-application/categories/data-access';
import {
  EventsEntity,
  EventsFacade,
} from '@membership-application/events/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css'],
})
export class UpdateEventsComponent implements OnInit, OnDestroy {
  @Input() selectedEvent!: EventsEntity;
  @Output() closeModal = new EventEmitter();
  private loadedSubscription = new Subscription();

  constructor(
    public eventFacade: EventsFacade,
    public categoriesFacade: CategoriesFacade
  ) {}

  ngOnInit(): void {
    this.categoriesFacade.getAllCategories();
  }

  onSubmit(event: EventsEntity) {
    this.eventFacade.updateEvent(event);
    this.loadedSubscription = this.eventFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}
