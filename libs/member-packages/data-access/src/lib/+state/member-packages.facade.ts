import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as MemberPackagesActions from './member-packages.actions';
import { MemberPackageEntity } from './member-packages.models';
import * as MemberPackagesFeature from './member-packages.reducer';
import * as MemberPackagesSelectors from './member-packages.selectors';

@Injectable()
export class MemberPackagesFacade {
  loaded$ = this.store.pipe(
    select(MemberPackagesSelectors.getMemberPackagesLoaded)
  );
  allMemberPackages$ = this.store.pipe(
    select(MemberPackagesSelectors.getAllMemberPackages)
  );
  selectedMemberPackage$ = this.store.pipe(
    select(MemberPackagesSelectors.getSelectedMemberPackage)
  );
  loading$ = this.store.pipe(
    select(MemberPackagesSelectors.getMemberPackagesLoadingState)
  );
  totalMemberPackages$ = this.store.pipe(
    select(MemberPackagesSelectors.getTotalMemberPackages)
  );
  btnState$ = this.store.pipe(select(MemberPackagesSelectors.getBtnState));

  constructor(
    private store: Store<MemberPackagesFeature.MemberPackagesPartialState>
  ) {}

  getPaginatedMemberPackages(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      MemberPackagesActions.getPaginatedMemberPackages({ state })
    );
  }

  getAllMemberPackages() {
    this.store.dispatch(MemberPackagesActions.getAllMemberPackages());
  }

  getAllMemberPackagesByMemberType(memberTypeId: any) {
    this.store.dispatch(
      MemberPackagesActions.getAllMemberPackagesByMemberType({ memberTypeId })
    );
  }

  getMemberPackage(memberPackageId: string | number) {
    this.store.dispatch(
      MemberPackagesActions.getMemberPackageById({
        memberPackageId,
      })
    );
  }

  createNewMemberPackage(memberPackage: MemberPackageEntity) {
  console.log("dsds",memberPackage)
    this.store.dispatch(
      MemberPackagesActions.createMemberPackage(memberPackage)
    );
  }

  updateMemberPackage(memberPackage: MemberPackageEntity) {
    this.store.dispatch(
      MemberPackagesActions.updateMemberPackage(memberPackage)
    );
  }

  deleteMemberPackage(memberPackageId: string | number) {
    this.store.dispatch(
      MemberPackagesActions.deleteMemberPackage({
        memberPackageId,
      })
    );
  }
}
