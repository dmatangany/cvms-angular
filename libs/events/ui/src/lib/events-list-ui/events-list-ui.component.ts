import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsEntity } from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-events-list-ui',
  templateUrl: './events-list-ui.component.html',
  styleUrls: ['./events-list-ui.component.css'],
})
export class EventsListUiComponent implements OnInit {
  @Input() eventsList: EventsEntity[] = [];
  @Input() canModify = false;
  @Output() updatedState = new EventEmitter();
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updateSelected = new EventEmitter<EventsEntity>();
  @Output() deleteSelected = new EventEmitter<EventsEntity>();
  @Output() viewAvailablePackages = new EventEmitter<EventsEntity>();
  @Output() publishSelectedEvent = new EventEmitter();
  @Output() unpublishSelectedEvent = new EventEmitter();

  ngOnInit() {}
}
