import { UsersEntity, UsersFacade } from '@membership-application/users/data-access';
import {ChangeDetectorRef, OnDestroy, AfterContentInit, AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import { MemberProfilesEntity, MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import {ClrDatagridStateInterface} from "@clr/angular";
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import { MemberAttributesFacade } from '@membership-application/member-attributes/data-access';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
@Component({
  selector: 'membership-application-my-member-user-profile',
  templateUrl: './my-member-user-profile.component.html',
  styleUrls: ['./my-member-user-profile.component.scss'],
})
export class MyMemberUserProfileComponent implements AfterViewChecked {
  @Input() userProfile!: UsersEntity;
  memberProfile!: MemberProfilesEntity;
  sub = new Subscription();
  public isMember = false;
  public isNotMember = false;
  selectedSubscription: any;
  memberId!: string | number;

  constructor(
    public subscriptionsFacade:SubscriptionsFacade,
    public usersFacade: UsersFacade,
    public memberProfilesFacade:MemberProfilesFacade,
    public memberTypesFacade: MemberTypesFacade,
    public memberAttributesFacade: MemberAttributesFacade,
    private route: ActivatedRoute,

    private router: Router,
    private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getMemberUsers() {
    this.usersFacade.getUserById(this.userProfile.id);
  }
  getMemberUserList() {
    this.getMemberUsers();
  }
  public getSubscriptions(state: ClrDatagridStateInterface) {
    this.subscriptionsFacade.getPaginatedSubscriptionsByMember(this.userProfile.membershipIndex, state);
  }

  getSubscriptionsByMember() {
    this.getSubscriptions({});
  }
  refresh() {
    this.isMember = false;
    if(this.isMember) {
      this.getSubscriptions({});
    }
  }
  ngOnInit() {
    this.isNotMember = false;
    this.isMember = true;
    setTimeout(() => {
      if(this.userProfile.membershipIndex!=null) {
      console.log("MyMemberUserProfileComponent 1", this.userProfile.membershipIndex, "userid", this.userProfile.membershipIndex)
      if(this.userProfile.membershipIndex==0){
        this.isNotMember = true;
        this.isMember = false;
      }
        console.log("MyMemberUserProfileComponent 2", this.userProfile.membershipIndex, "userid", this.userProfile.membershipIndex)
        if (!this.isMember) {
          this.memberTypesFacade.getAllMemberTypes();
          this.getMemberUserList();
        }
        if (this.isMember) {
          this.memberProfilesFacade.getMemberProfile(
            this.userProfile.membershipIndex
          );
          this.subscriptionsFacade.getMemberSubscriptionsByMemberId(
            this.userProfile.membershipIndex
          );
        }
      }
    }, 1000);
  }
  onSubmit(formValue: any) {
    console.log("MyMemberUserProfileComponent onSubmit", this.isMember)
    if(!this.isMember) {
      this.memberProfilesFacade.createNewMemberProfile(formValue);
      this.sub = this.memberProfilesFacade.loaded$.subscribe((res) => {
        res ? this.router.navigate(['/dashboard']) : null;
      });
    }
    if(this.isMember) {
      console.log("MyMemberUserProfileComponent onSubmit2", this.isMember)
      this.memberProfilesFacade.createMemberPayment(formValue);
      this.sub = this.memberProfilesFacade.loaded$.subscribe((res) => {
        res ? this.router.navigate(['/dashboard']) : null;
      });
    }
  }

  getAttributes(event: { value: string | number }) {
    this.memberAttributesFacade.getAttributeByMemberType(event.value);
  }

  getUserAttributes(event: { value: string | number }) {
    this.memberAttributesFacade.getAttributeByMemberType(event.value);
  }
}
