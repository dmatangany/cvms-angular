import { Subscription } from 'rxjs';

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-update-member-type',
  templateUrl: './update-member-type.component.html',
  styleUrls: ['./update-member-type.component.scss'],
})
export class UpdateMemberTypeComponent implements OnInit, OnDestroy {
  @Input() memberType!: MemberTypesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();
  constructor(public memberTypesFacade: MemberTypesFacade) {}

  ngOnInit(): void {}

  onSubmit(memberType: MemberTypesEntity) {
    this.memberTypesFacade.updateMemberType(memberType);
    this.sub = this.memberTypesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
