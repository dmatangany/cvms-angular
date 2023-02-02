import { UpdatePackageComponent } from './update-package/update-package.component';
import { DeletePackageComponent } from './delete-package/delete-package.component';
import { CreatePackageComponent } from './create-package/create-package.component';

import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberPackagesUiModule } from '@membership-application/member-packages/ui';
import { MemberPackagesDataAccessModule } from '@membership-application/member-packages/data-access';
import { ListPackagesComponent } from './list-packages/list-packages.component';
import { SharedUiModule } from '@membership-application/shared/ui';
import { RouterModule } from '@angular/router';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { MemberTypesDataAccessModule } from '@membership-application/member-types/data-access';
import {
  UpdateMemberProfileComponent
} from "../../../feature-member-profile/src/lib/update-member-profile/update-member-profile.component";
import {
  CreateMemberProfileComponent
} from "../../../feature-member-profile/src/lib/create-member-profile/create-member-profile.component";
import {
  ViewMemberProfileComponent
} from "../../../feature-member-profile/src/lib/view-member-profile/view-member-profile.component";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    MemberPackagesDataAccessModule,
    MemberPackagesUiModule,
    SharedUiModule,
    CurrenciesDataAccessModule,
    MemberTypesDataAccessModule,
    RouterModule.forChild([{ path: '', component: ListPackagesComponent },
      { path: 'update/:packageId', component: UpdatePackageComponent },
      { path: 'create', component: CreatePackageComponent }
      ])
      ],
  declarations: [
    CreatePackageComponent,
    DeletePackageComponent,
    ListPackagesComponent,
    UpdatePackageComponent,
  ],
})
export class AdminFeatureMemberPackagesModule {}
