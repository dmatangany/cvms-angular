import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupsComponent } from './list-groups/list-groups.component';

import { GroupsUiModule } from '@membership-application/groups/ui';
import { GroupsDataAccessModule } from '@membership-application/groups/data-access';
import { AccessControlAuthoritiesDataAccessModule } from '@membership-application/access-control/authorities/data-access';
import { AccessControlGroupAuthoritiesDataAccessModule } from '@membership-application/access-control/group-authorities/data-access';
import { AccessControlGroupAuthoritiesUiModule } from '@membership-application/access-control/group-authorities/ui';

import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { AddAuthoritiesComponent } from './add-authorities/add-authorities.component';
import { ViewGroupAuthoritiesComponent } from './view-group-authorities/view-group-authorities.component';
import { AccessControlAuthoritiesUiModule } from '@membership-application/access-control/authorities/ui';

@NgModule({
  imports: [
    CommonModule,
    GroupsUiModule,
    GroupsDataAccessModule,
    ClarityModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListGroupsComponent },
      {
        path: 'view-authorities/:groupId',
        component: ViewGroupAuthoritiesComponent,
      },
      {
        path: 'assign-authorities/:groupId',
        component: AddAuthoritiesComponent,
      },
    ]),
    AccessControlGroupAuthoritiesDataAccessModule,
    AccessControlGroupAuthoritiesUiModule,
    AccessControlAuthoritiesDataAccessModule,
    AccessControlAuthoritiesUiModule,
  ],
  declarations: [
    ListGroupsComponent,
    AddAuthoritiesComponent,
    ViewGroupAuthoritiesComponent,
  ],
})
export class AdminFeatureGroupsModule {}
