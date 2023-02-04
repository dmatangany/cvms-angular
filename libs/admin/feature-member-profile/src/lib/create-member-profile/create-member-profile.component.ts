import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberAttributesFacade } from '@membership-application/member-attributes/data-access';
import { MemberProfilesEntity, MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
import { UsersFacade } from '@membership-application/users/data-access';
import {ClrDatagridStateInterface} from "@clr/angular";

@Component({
  selector: 'membership-application-create-member-profile',
  templateUrl: './create-member-profile.component.html',
  styleUrls: ['./create-member-profile.component.css'],
})
export class CreateMemberProfileComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  memberProfile!: MemberProfilesEntity;
  constructor(
    public usersFacade: UsersFacade,
    public memberTypesFacade: MemberTypesFacade,
    public memberProfileFacade: MemberProfilesFacade,
    public memberAttributesFacade: MemberAttributesFacade,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.memberTypesFacade.getAllMemberTypes();
    this.getMemberUserList();
  }

  public getMemberUsers(state: ClrDatagridStateInterface) {
    this.usersFacade.getPaginatesUsersByGroup(3, state);
  }
  getMemberUserList() {
    this.getMemberUsers({});
  }

  onSubmit(formValue: any) {
    this.memberProfileFacade.createNewMemberProfile(formValue);
    this.sub = this.memberProfileFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/member-profile']) : null;
    });
  }

  getAttributes(event: { value: string | number }) {
    this.memberAttributesFacade.getAttributeByMemberType(event.value);
  }
  getUserAttributes(event: { value: string | number }) {
    this.memberAttributesFacade.getAttributeByMemberType(event.value);
  }
}
