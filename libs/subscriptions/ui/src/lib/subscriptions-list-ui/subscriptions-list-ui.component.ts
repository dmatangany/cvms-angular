import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { SubscriptionsEntity } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-subscriptions-list-ui',
  templateUrl: './subscriptions-list-ui.component.html',
  styleUrls: ['./subscriptions-list-ui.component.scss'],
})
export class SubscriptionsListUiComponent implements OnInit {
  @Input() subscriptionsList!: SubscriptionsEntity[];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  searchText = '';
  term: String = '';
  constructor() {}

  ngOnInit() {}
}
