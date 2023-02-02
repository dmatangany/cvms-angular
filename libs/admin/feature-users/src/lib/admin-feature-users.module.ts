import { FormsModule } from '@angular/forms';
import { GroupsDataAccessModule } from '@membership-application/groups/data-access';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { UsersUiModule } from '@membership-application/users/ui';
import { UsersDataAccessModule } from '@membership-application/users/data-access';
import { PasswordManagementDataAccessModule } from '@membership-application/password-management/data-access';
import { PasswordManagementUiModule } from '@membership-application/password-management/ui';

import { ListUsersComponent } from './list-users/list-users.component';
import { ChangeUserStatusComponent } from './change-user-status/change-user-status.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserAuthoritiesComponent } from './view-user-authorities/view-user-authorities.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AccessControlAuthoritiesDataAccessModule } from '@membership-application/access-control/authorities/data-access';
import { AccessControlAuthoritiesUiModule } from '@membership-application/access-control/authorities/ui';
import { SharedUiModule } from '@membership-application/shared/ui';
import { AccessControlUserAuthoritiesDataAccessModule } from '@membership-application/access-control/user-authorities/data-access';
import { ListUsersByGroupComponent } from './list-users-by-group/list-users-by-group.component';
import { UsersContainerComponent } from './users-container/users-container.component';

export const adminFeatureUsersRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    UsersUiModule,
    FormsModule,
    UsersDataAccessModule,
    PasswordManagementDataAccessModule,
    PasswordManagementUiModule,
    AccessControlAuthoritiesDataAccessModule,
    AccessControlAuthoritiesUiModule,
    AccessControlUserAuthoritiesDataAccessModule,
    SharedUiModule,
    GroupsDataAccessModule,
    RouterModule.forChild([
      { path: '', component: UsersContainerComponent },

      {
        path: 'user-details/:userId',
        component: ViewUserComponent,
        pathMatch: 'full',
      },
      {
        path: 'view-user-authorities/:userId',
        component: ViewUserAuthoritiesComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'update-user/:userId',
        component: UpdateUserComponent,
      },
    ]),
  ],

  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ViewUserAuthoritiesComponent,
    ChangeUserStatusComponent,
    ListUsersByGroupComponent,
    UsersContainerComponent,
  ],
})
export class AdminFeatureUsersModule {}
