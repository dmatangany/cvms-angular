import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  MemberTypesEntity,
  MemberTypesFacade,
} from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-list-member-types',
  templateUrl: './list-member-types.component.html',
  styleUrls: ['./list-member-types.component.scss'],
})
export class ListMemberTypesComponent implements OnInit, AfterViewChecked {
  public isCreate = false;
  public isUpdate = false;
  public isDelete = false;
  public selectedMemberType!: MemberTypesEntity;
  public placeholderMessage = 'Member Types';
  isAddAttribute!: boolean;

  constructor(
    public memberTypesFacade: MemberTypesFacade,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getMemberTypes(state: ClrDatagridStateInterface) {
    this.memberTypesFacade.getPaginatedMemberTypes(state);
  }

  refresh(isRefresh: boolean) {
    this.isCreate = false;
    this.isUpdate = false;
    this.isDelete = false;
    this.isAddAttribute = false;
    return isRefresh ? this.getMemberTypes({}) : null;
  }

  updateMemberType(memberType: MemberTypesEntity) {
    this.selectedMemberType = memberType;
    this.isUpdate = true;
    this.cdr.detectChanges();
  }

  deleteMemberType(memberType: MemberTypesEntity) {
    this.selectedMemberType = memberType;
    this.isDelete = true;
    this.cdr.detectChanges();
  }

  viewMemberType(memberType: MemberTypesEntity) {
    this.router.navigate(['/member-types/details', memberType.id]);
  }
  addAttribute(memberType: any) {
    this.selectedMemberType = memberType;
    this.isAddAttribute = true;
  }
}
