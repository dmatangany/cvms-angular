import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';

import { Subscription } from 'rxjs';

import {
  EventsFacade,
  EventsEntity,
} from '@membership-application/events/data-access';
import { CategoriesFacade } from '@membership-application/categories/data-access';

@Component({
  selector: 'membership-application-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css'],
})
export class CreateEventsComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  private loadedSubscription = new Subscription();

  constructor(
    public eventsFacade: EventsFacade,
    public categoriesFacade: CategoriesFacade
  ) {}

  ngOnInit(): void {
    this.categoriesFacade.getAllCategories();
  }

  onSubmit(event: EventsEntity) {
    this.eventsFacade.createNewEvent(event);
    this.loadedSubscription = this.eventsFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}
