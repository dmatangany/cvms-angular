import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-list-subscriptions-by-member',
  templateUrl: './list-subscriptions-by-member.component.html',
  styleUrls: ['./list-subscriptions-by-member.component.css'],
})
export class ListSubscriptionsByMemberComponent implements OnInit, AfterViewChecked {
  public isCreate = false;
  public isDelete = false;
  selectedSubscription: any;
  memberId!: string | number;
  
  constructor(
    public subscriptionFacade: SubscriptionsFacade,
    public router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {}

  public getSubscriptions(state: ClrDatagridStateInterface) {
    this.subscriptionFacade.getPaginatedSubscriptionsByMember(this.memberId, state);
  }
  
  getSubscriptionsByMember() {
    this.getSubscriptions({});
  }

  public promptDelete(content: any) {
    this.isDelete = true;
    this.selectedSubscription = content;
  }

  refresh() {
    this.isDelete = false;
    this.isCreate = false;
    this.getSubscriptions({});
  }
}
