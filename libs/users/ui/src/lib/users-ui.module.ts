import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@membership-application/shared/ui';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListUsersUiComponent } from './list-users-ui/list-users-ui.component';
import { FilterPipe } from './filter/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule,
    RouterModule,
    SharedUiModule,
  ],
  declarations: [ListUsersUiComponent, UserDetailsComponent, UserFormComponent, FilterPipe],
  exports: [ListUsersUiComponent, UserDetailsComponent, UserFormComponent],
})
export class UsersUiModule {}
