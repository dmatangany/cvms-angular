import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPasswordManagement from './+state/password-management.reducer';
import { PasswordManagementEffects } from './+state/password-management.effects';
import { PasswordManagementFacade } from './+state/password-management.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPasswordManagement.PASSWORD_MANAGEMENT_FEATURE_KEY,
      fromPasswordManagement.reducer
    ),
    EffectsModule.forFeature([PasswordManagementEffects]),
  ],
  providers: [PasswordManagementFacade],
})
export class PasswordManagementDataAccessModule {}
