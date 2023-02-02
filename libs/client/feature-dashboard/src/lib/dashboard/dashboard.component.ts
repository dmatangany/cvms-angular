import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberAttributesFacade } from '@membership-application/member-attributes/data-access';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
import { Subscription } from 'rxjs';
import { UsersEntity, UsersFacade } from '@membership-application/users/data-access';
@Component({
  selector: 'membership-application-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public usersFacade: UsersFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.usersFacade.getUserProfile();
  }

  onSubmit(formValue: any) {
  }
}
