import { Component, Input, OnInit } from '@angular/core';
import { MemberAccountsEntity } from '@membership-application/member-accounts/data-access';


@Component({
  selector: 'membership-application-account-details-ui',
  templateUrl: './account-details-ui.component.html',
  styleUrls: ['./account-details-ui.component.css'],
})
export class AccountDetailsUiComponent implements OnInit {
  @Input() myAccount!: MemberAccountsEntity;
  constructor() {}

  ngOnInit(): void {}
}
