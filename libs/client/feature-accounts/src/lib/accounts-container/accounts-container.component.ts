import { Component, OnInit } from '@angular/core';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
@Component({
  selector: 'membership-application-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.scss'],
})
export class AccountsContainerComponent implements OnInit {
  constructor(public memberProfilesFacade: MemberProfilesFacade) {
    this.memberProfilesFacade.getMyMemberProfile();
  }

  ngOnInit(): void {
    this.memberProfilesFacade.getMyMemberProfile();
  }
}
