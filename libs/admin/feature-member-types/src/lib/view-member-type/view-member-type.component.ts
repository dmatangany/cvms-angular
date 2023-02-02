import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-view-member-type',
  templateUrl: './view-member-type.component.html',
  styleUrls: ['./view-member-type.component.css'],
})
export class ViewMemberTypeComponent implements OnInit {
  public memberType$ = this.memberTypesFacade.getMemberType(
    this.route.snapshot.paramMap.get('memberTypeId')!
  );

  constructor(
    public memberTypesFacade: MemberTypesFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
