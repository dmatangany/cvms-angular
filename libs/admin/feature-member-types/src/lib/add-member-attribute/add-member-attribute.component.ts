import { MemberAccountsEntity } from '@membership-application/member-accounts/data-access';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  MemberAttributesEntity,
  MemberAttributesFacade,
} from '@membership-application/member-attributes/data-access';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-add-member-attribute',
  templateUrl: './add-member-attribute.component.html',
  styleUrls: ['./add-member-attribute.component.scss'],
})
export class AddMemberAttributeComponent implements OnInit {
  @Input() memberAttribute!: MemberAttributesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() memberType!: MemberTypesEntity;
  sub = new Subscription();

  constructor(
    public memberAttributesFacade: MemberAttributesFacade,
    public memberTypesFacade: MemberTypesFacade
  ) {}

  ngOnInit(): void {
    this.memberTypesFacade.getAllMemberTypes();
  }

  onSubmit(memberAttribute: any) {
    memberAttribute.memberTypeId = this.memberType.id;
    this.memberAttributesFacade.createNewMemberAttribute(memberAttribute);
    this.sub = this.memberAttributesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
