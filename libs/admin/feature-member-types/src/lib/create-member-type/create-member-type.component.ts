import { Subscription } from 'rxjs';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'membership-application-create-member-type',
  templateUrl: './create-member-type.component.html',
  styleUrls: ['./create-member-type.component.scss'],
})
export class CreateMemberTypeComponent implements OnInit, OnDestroy {
  @Input() memberType!: MemberTypesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(public memberTypesFacade: MemberTypesFacade) {}

  ngOnInit(): void {}

  onSubmit(memberType: MemberTypesEntity) {
    this.memberTypesFacade.createNewMemberType(memberType);
    this.sub = this.memberTypesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
