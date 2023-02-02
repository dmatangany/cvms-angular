import { ActivatedRoute } from '@angular/router';
import { MemberTypesFacade } from '@membership-application/member-types/data-access';
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
  selector: 'membership-application-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.css'],
})
export class CreateAttributeComponent implements OnInit, OnDestroy {
  @Input() memberAttribute!: MemberAttributesEntity;
  @Output() closeModal = new EventEmitter<boolean>();
  sub = new Subscription();

  constructor(
    public memberAttributesFacade: MemberAttributesFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(memberAttribute: any) {
    memberAttribute.memberTypeId =
      this.route.snapshot.paramMap.get('memberTypeId');
    this.memberAttributesFacade.createNewMemberAttribute(memberAttribute);
    this.sub = this.memberAttributesFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
