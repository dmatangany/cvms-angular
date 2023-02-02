import { Component, OnInit } from '@angular/core';
import { MemberAccountsFacade } from '@membership-application/member-accounts/data-access';

@Component({
  selector: 'membership-application-my-member-account',
  templateUrl: './my-member-account.component.html',
  styleUrls: ['./my-member-account.component.scss'],
})
export class MyMemberAccountComponent implements OnInit {
  isLoadAccount = false
  constructor(public memberAccountsFacade: MemberAccountsFacade) {}

  ngOnInit(): void {
    this.memberAccountsFacade.getMyMemberAccount()
  }
}
