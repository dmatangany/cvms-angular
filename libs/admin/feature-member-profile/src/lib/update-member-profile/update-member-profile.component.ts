import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberAttributesFacade } from '@membership-application/member-attributes/data-access';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
import { UsersFacade } from '@membership-application/users/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-update-member-profile',
  templateUrl: './update-member-profile.component.html',
  styleUrls: ['./update-member-profile.component.css'],
})
export class UpdateMemberProfileComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  constructor(
    public usersFacade: UsersFacade,
    public memberTypesFacade: MemberTypesFacade,
    public memberProfileFacade: MemberProfilesFacade,
    public memberAttributesFacade: MemberAttributesFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.memberProfileFacade.getMemberProfile(
      this.activatedRoute.snapshot.paramMap.get('profileId')!
    );
    this.memberAttributesFacade.getAllMemberAttributes();
    this.memberTypesFacade.getAllMemberTypes();
  }

  onSubmit(formValue: any) {
    this.memberProfileFacade.createNewMemberProfile(formValue);
    this.sub = this.memberProfileFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/member-profile']) : null;
    });
  }

  getAttributes(id: any) {
    this.memberAttributesFacade.getAttributeByMemberType(id);
  }
}
