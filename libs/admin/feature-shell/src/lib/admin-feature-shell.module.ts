import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AuthGuard } from '@membership-application/auth/data-access';

import { PortalContainerComponent } from './components/portal-container/portal-container.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserProfileResolverService } from '@membership-application/users/data-access';

export const adminFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@membership-application/admin/feature-auth').then(
        (module) => module.AdminFeatureAuthModule
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
          import('@membership-application/admin/feature-dashboard').then(
            (module) => module.AdminFeatureDashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@membership-application/admin/feature-users').then(
            (module) => module.AdminFeatureUsersModule
          ),
      },

      {
        path: 'groups',
        loadChildren: () =>
          import('@membership-application/admin/feature-groups').then(
            (module) => module.AdminFeatureGroupsModule
          ),
      },

      {
        path: 'audit-trail',
        loadChildren: () =>
          import('@membership-application/admin/feature-audits').then(
            (module) => module.AdminFeatureAuditsModule
          ),
      },

      {
        path: 'currencies',
        loadChildren: () =>
          import('@membership-application/admin/feature-currencies').then(
            (m) => m.AdminFeatureCurrenciesModule
          ),
      },

      {
        path: 'pesepay-credentials',
        loadChildren: () =>
          import(
            '@membership-application/admin/feature-pesepay-integration-credentials'
          ).then((m) => m.AdminFeaturePesepayIntegrationCredentialsModule),
      },

      {
        path: 'categories',
        loadChildren: () =>
          import('@membership-application/admin/feature-categories').then(
            (m) => m.AdminFeatureCategoriesModule
          ),
      },
      {
        path: 'member-types',
        loadChildren: () =>
          import('@membership-application/admin/feature-member-types').then(
            (m) => m.AdminFeatureMemberTypesModule
          ),
      },
      {
        path: 'member-attributes',
        loadChildren: () =>
          import(
            '@membership-application/admin/feature-member-attributes'
          ).then((m) => m.AdminFeatureMemberAttributesModule),
      },
      {
        path: 'member-packages',
        loadChildren: () =>
          import('@membership-application/admin/feature-member-packages').then(
            (m) => m.AdminFeatureMemberPackagesModule
          ),
      },

      {
        path: 'member-profile',
        loadChildren: () =>
          import('@membership-application/admin/feature-member-profile').then(
            (m) => m.AdminFeatureMemberProfileModule
          ),
      },

      {
        path: 'member-accounts',
        loadChildren: () =>
          import('@membership-application/admin/feature-member-accounts').then(
            (m) => m.AdminFeatureMemberAccountsModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('@membership-application/admin/feature-transactions').then(
            (m) => m.AdminFeatureTransactionsModule
          ),
      },

      {
        path: 'subscriptions',
        loadChildren: () =>
          import('@membership-application/admin/feature-subscriptions').then(
            (m) => m.AdminFeatureSubscriptionsModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('@membership-application/admin/feature-events').then(
            (m) => m.AdminFeatureEventsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminFeatureShellRoutes),
    ClarityModule,
  ],
  declarations: [PortalContainerComponent, HeaderComponent, SideNavComponent],
})
export class AdminFeatureShellModule {}
