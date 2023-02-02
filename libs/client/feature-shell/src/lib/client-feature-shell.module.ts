import { MemberAccountsDataAccessModule } from '@membership-application/member-accounts/data-access';
import { SubscriptionsDataAccessModule } from '@membership-application/subscriptions/data-access';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortalContainerComponent } from './portal-container/portal-container.component';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '@membership-application/auth/data-access';
import { UserProfileResolverService } from '@membership-application/users/data-access';
import { ClarityModule } from '@clr/angular';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { HeaderTwoComponent } from './header-two/header-two.component';

export const clientFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@membership-application/client/feature-auth').then(
        (module) => module.ClientFeatureAuthModule
      ),
  },
  {
    path: '',
    component: PortalContainerComponent,
    canActivate: [AuthGuard],
    resolve: [UserProfileResolverService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@membership-application/client/feature-dashboard').then(
            (module) => module.ClientFeatureDashboardModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('@membership-application/client/feature-subscriptions').then(
            (module) => module.ClientFeatureSubscriptionsModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('@membership-application/client/feature-transactions').then(
            (module) => module.ClientFeatureTransactionsModule
          ),
      },
      {
        path: 'my-accounts',
        loadChildren: () =>
          import('@membership-application/client/feature-accounts').then(
            (module) => module.ClientFeatureAccountsModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('@membership-application/client/feature-events').then(
            (module) => module.ClientFeatureEventsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientFeatureShellRoutes),
    ClarityModule,
    MemberProfilesDataAccessModule,
    SubscriptionsDataAccessModule,
    MemberAccountsDataAccessModule,
  ],
  declarations: [HeaderComponent, PortalContainerComponent, HeaderTwoComponent],
})
export class ClientFeatureShellModule {}
