import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ListGroupsUiComponent } from './list-groups-ui/list-groups-ui.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ClarityModule],
  declarations: [ListGroupsUiComponent],
  exports: [ListGroupsUiComponent],
})
export class GroupsUiModule {}
