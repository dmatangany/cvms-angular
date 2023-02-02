import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardDataAccessModule } from '@membership-application/dashboard/data-access';
import { DashboardUiModule } from '@membership-application/dashboard/ui';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TotalAmountCurrentMonthComponent } from './total-amount-current-month/total-amount-current-month.component';
import { TotalAmountCurrentYearComponent } from './total-amount-current-year/total-amount-current-year.component';
import { TotalAmountInHistoryComponent } from './total-amount-in-history/total-amount-in-history.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DashboardDataAccessModule,
    DashboardUiModule,
    NgxChartsModule,
    RouterModule.forChild([
      { path: '', component: DashboardContainerComponent },
    ]),
  ],
  declarations: [
    DashboardContainerComponent,
    TotalAmountCurrentMonthComponent,
    TotalAmountCurrentYearComponent,
    TotalAmountInHistoryComponent,
  ],
})
export class AdminFeatureDashboardModule {}
