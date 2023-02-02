import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrDatagrid, ClrDatagridStateInterface } from '@clr/angular';
import { GroupsFacade } from '@membership-application/groups/data-access';

@Component({
  selector: 'membership-application-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css'],
})
export class ListGroupsComponent implements OnInit, AfterViewChecked {
  constructor(
    public groupsFacade: GroupsFacade,
    public cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {}

  getGroups(state: ClrDatagridStateInterface) {
    this.groupsFacade.getPaginatedGroups(state);
  }

  viewGroupAuthorities(groupId: string | number) {
    this.router.navigate(['../view-authorities', groupId], {
      relativeTo: this.route,
    });
  }
}
