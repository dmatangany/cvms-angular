import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardFacade } from './+state/dashboard.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.dashboardReducer
    ),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [DashboardFacade],
})
export class DashboardDataAccessModule {}
