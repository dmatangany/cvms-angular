import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCredentials from './+state/credentials.reducer';
import { CredentialsEffects } from './+state/credentials.effects';
import { CredentialsFacade } from './+state/credentials.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCredentials.CREDENTIALS_FEATURE_KEY,
      fromCredentials.credentialsReducer
    ),
    EffectsModule.forFeature([CredentialsEffects]),
  ],
  providers: [ CredentialsFacade],
})
export class PesepayIntegrationCredentialsDataAccessModule {}
