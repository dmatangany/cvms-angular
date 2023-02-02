import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventPackagesEntity } from '@membership-application/event-packages/data-access';


@Component({
  selector: 'membership-application-events-packages-list-ui',
  templateUrl: './events-packages-list-ui.component.html',
  styleUrls: ['./events-packages-list-ui.component.css'],
})
export class EventsPackagesListUiComponent implements OnInit {
  @Input() eventsPackagesList!: EventPackagesEntity[];
  @Output() updatedState = new EventEmitter();
  @Input() total=0;
  @Input() loading=false;
  @Input() canModify=false;
  @Input() placeholderMessage='';
  @Output() updateSelected = new EventEmitter<EventPackagesEntity>();
  @Output() deleteSelected = new EventEmitter<EventPackagesEntity>();

  constructor() {}

  ngOnInit(): void {}
}
