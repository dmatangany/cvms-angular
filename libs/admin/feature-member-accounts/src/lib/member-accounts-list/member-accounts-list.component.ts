import {
  MemberAccountsEntity,
  MemberAccountsFacade,
} from '@membership-application/member-accounts/data-access';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'membership-application-member-accounts-list',
  templateUrl: './member-accounts-list.component.html',
  styleUrls: ['./member-accounts-list.component.css'],
})
export class MemberAccountsListComponent implements OnInit, AfterViewChecked {
  public loading = true;
  public isEdit = false;
  public isDelete = false;
  selectedMemberAccounts!: MemberAccountsEntity;

  constructor(
    public memberAccountsFacade: MemberAccountsFacade,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {}

  getMemberAccounts(state: ClrDatagridStateInterface) {
    this.memberAccountsFacade.getPaginatedMemberAccounts(state);
  }

  refresh() {
    this.isEdit = false;
    this.getMemberAccounts({});
  }

  edit(memberAccount: MemberAccountsEntity) {
    this.selectedMemberAccounts = memberAccount;
    this.isEdit = true;
  }
}
