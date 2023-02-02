import { ClrDatagridStateInterface } from '@clr/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MemberAccountsEntity } from '@membership-application/member-accounts/data-access';

@Component({
  selector: 'membership-application-member-accounts-list-ui',
  templateUrl: './member-accounts-list-ui.component.html',
  styleUrls: ['./member-accounts-list-ui.component.css'],
})
export class MemberAccountsListUiComponent implements OnInit {
  @Input() loading = true;
  @Input() memberAccounts!: MemberAccountsEntity[];
  @Input() total = 0;
  @Input() placeholderMessage = '';
  @Output() editSelected = new EventEmitter();
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();

  constructor() {}

  ngOnInit(): void {}
}
