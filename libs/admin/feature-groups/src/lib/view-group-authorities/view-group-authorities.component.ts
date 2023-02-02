import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoritiesFacade } from '@membership-application/access-control/authorities/data-access';

import {
  GroupAuthoritiesEntity,
  GroupAuthoritiesFacade,
} from '@membership-application/access-control/group-authorities/data-access';
import { GroupsFacade } from '@membership-application/groups/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-view-group-authorities',
  templateUrl: './view-group-authorities.component.html',
  styleUrls: ['./view-group-authorities.component.scss'],
})
export class ViewGroupAuthoritiesComponent implements OnInit {
  private loadedSubscription = new Subscription();

  constructor(
    public groupAuthoritiesFacade: GroupAuthoritiesFacade,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public groupFacade: GroupsFacade,
    public authoritiesFacade: AuthoritiesFacade
  ) {}

  ngOnInit(): void {
    this.getGroupAuthorities();
    this.authoritiesFacade.getAllAuthorities();
  }

  getGroupAuthorities() {
    this.groupAuthoritiesFacade.getAllGroupAuthorities(
      this.route.snapshot.paramMap.get('groupId')!
    );
    this.cdr.detectChanges();
  }

  onSubmit(groupContext: any) {
    groupContext.groupId = this.route.snapshot.paramMap.get('groupId')!;
    this.groupAuthoritiesFacade.createGroupAuthoritiesBundled(groupContext);
  }

  close() {
    this.router.navigate(['/groups']);
  }
}
