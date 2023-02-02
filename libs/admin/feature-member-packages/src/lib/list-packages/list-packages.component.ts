import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';

import {
  MemberPackageEntity,
  MemberPackagesFacade,
} from '@membership-application/member-packages/data-access';

@Component({
  selector: 'membership-application-list-packages',
  templateUrl: './list-packages.component.html',
  styleUrls: ['./list-packages.component.css'],
})
export class ListPackagesComponent implements OnInit, AfterViewChecked {
  public isCreate = false;
  public isUpdate = false;
  public isDelete = false;
  public selectedMemberPackage!: MemberPackageEntity;

  public placeholderMessage = 'Member Packages';

  constructor(
    public memberPackagesFacade: MemberPackagesFacade,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getMemberPackages(state: ClrDatagridStateInterface) {
    this.memberPackagesFacade.getPaginatedMemberPackages(state);
  }

  refresh(isRefresh: boolean) {
    this.isCreate = false;
    this.isUpdate = false;
    this.isDelete = false;
    return isRefresh ? this.getMemberPackages({}) : null;
  }

  updateMemberPackage(memberPackage: MemberPackageEntity) {
    this.selectedMemberPackage = memberPackage;
    this.router.navigate(['/member-packages/update', memberPackage?.id]);
    this.isUpdate = true;
    this.cdr.detectChanges();
  }

  deleteMemberPackage(memberPackage: MemberPackageEntity) {
    this.selectedMemberPackage = memberPackage;
    this.isDelete = true;
    this.cdr.detectChanges();
  }

  viewMemberPackage(memberPackage: MemberPackageEntity) {
    this.router.navigate(['../details', memberPackage.id], {
      relativeTo: this.route,
    });
  }
}
