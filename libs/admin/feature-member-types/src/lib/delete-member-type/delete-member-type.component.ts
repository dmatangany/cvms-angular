import { Subscription } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-delete-member-type',
  templateUrl: './delete-member-type.component.html',
  styleUrls: ['./delete-member-type.component.scss'],
})
export class DeleteMemberTypeComponent implements OnInit, OnDestroy {
  @Input() memberType!: MemberTypesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(public memberTypesFacade: MemberTypesFacade) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.memberTypesFacade.deleteMemberType(this.memberType.id);
    this.sub = this.memberTypesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}
