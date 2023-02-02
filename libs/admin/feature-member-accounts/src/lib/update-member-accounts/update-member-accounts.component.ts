import { Subscription } from 'rxjs';
import { ClrLoadingState } from '@clr/angular';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  MemberAccountsEntity,
  MemberAccountsFacade,
} from '@membership-application/member-accounts/data-access';
@Component({
  selector: 'membership-application-update-member-accounts',
  templateUrl: './update-member-accounts.component.html',
  styleUrls: ['./update-member-accounts.component.css'],
})
export class UpdateMemberAccountsComponent implements OnInit, OnDestroy {
  @Input() memberAccount!: MemberAccountsEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  btnState = ClrLoadingState.DEFAULT;
  sub = new Subscription();

  constructor(public memberAccountsFacade: MemberAccountsFacade) {}

  ngOnInit(): void {}

  onSubmit(memberAccount: MemberAccountsEntity) {
    this.memberAccountsFacade.updateMemberAccount(memberAccount);
    this.memberAccountsFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
