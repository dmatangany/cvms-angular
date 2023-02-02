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
  selector: 'membership-application-delete-attribute',
  templateUrl: './delete-attribute.component.html',
  styleUrls: ['./delete-attribute.component.css'],
})
export class DeleteAttributeComponent implements OnInit, OnDestroy {
  @Input() memberAttribute!: MemberAttributesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(public memberAttributesFacade: MemberAttributesFacade) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.memberAttributesFacade.deleteMemberAttribute(this.memberAttribute.id);
    this.sub = this.memberAttributesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}
