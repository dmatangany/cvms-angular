import { MemberProfilesEntity, MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'membership-application-my-member-profile',
  templateUrl: './my-member-profile.component.html',
  styleUrls: ['./my-member-profile.component.scss'],
})
export class MyMemberProfileComponent implements OnInit {
  @Input() memberProfile!: MemberProfilesEntity;

  constructor(public memberProfileFacade:MemberProfilesFacade) {}

  ngOnInit(): void {
    console.log("MyMemberProfileComponent", this.memberProfile)
    this.memberProfileFacade.getMyMemberProfile();
    console.log("MyMemberProfileComponent", this.memberProfile)
  }
}
