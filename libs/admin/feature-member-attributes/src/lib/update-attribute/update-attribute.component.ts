import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';

import {
  MemberAttributesEntity,
  MemberAttributesFacade,
} from '@membership-application/member-attributes/data-access';

import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-update-attribute',
  templateUrl: './update-attribute.component.html',
  styleUrls: ['./update-attribute.component.css'],
})
export class UpdateAttributeComponent implements OnInit, OnDestroy {
  @Input() memberAttribute!: MemberAttributesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();
  constructor(public memberAttributesFacade: MemberAttributesFacade) {}

  ngOnInit(): void {}

  onSubmit(memberAttribute: MemberAttributesEntity) {
    this.memberAttributesFacade.updateMemberAttribute(memberAttribute);
    this.sub = this.memberAttributesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
