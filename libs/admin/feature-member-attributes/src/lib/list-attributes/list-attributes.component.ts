import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  MemberAttributesEntity,
  MemberAttributesFacade,
} from '@membership-application/member-attributes/data-access';

@Component({
  selector: 'membership-application-list-attributes',
  templateUrl: './list-attributes.component.html',
  styleUrls: ['./list-attributes.component.css'],
})
export class ListAttributesComponent implements OnInit, AfterViewChecked {
  public isCreate = false;
  public isUpdate = false;
  public isDelete = false;
  public selectedMemberAttribute!: MemberAttributesEntity;

  public placeholderMessage = 'Mmember Attributes';

  constructor(
    public memberAttributesFacade: MemberAttributesFacade,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMemberAttributes();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getMemberAttributes() {
    this.memberAttributesFacade.getAttributeByMemberType(
      this.route.snapshot.paramMap.get('memberTypeId')!
    );
  }

  refresh(isRefresh: boolean) {
    this.isCreate = false;
    this.isUpdate = false;
    this.isDelete = false;
    return isRefresh ? this.getMemberAttributes() : null;
  }

  updateMemberAttribute(memberAttribute: MemberAttributesEntity) {
    this.selectedMemberAttribute = memberAttribute;
    this.isUpdate = true;
    this.cdr.detectChanges();
  }

  deleteMemberAttribute(memberAttribute: any) {
    this.selectedMemberAttribute = memberAttribute;
    this.isDelete = true;
    this.cdr.detectChanges();
  }

  viewMemberAttribute(memberAttribute: MemberAttributesEntity) {
    this.router.navigate(['../details', memberAttribute.id], {
      relativeTo: this.route,
    });
  }
}
