import { EventsPackagesListComponent } from './events-packages-list/events-packages-list.component';
import { DeleteEventsPackagesComponent } from './delete-events-packages/delete-events-packages.component';
import { CreateEventsPackagesComponent } from './create-events-packages/create-events-packages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPackagesUiModule } from '@membership-application/event-packages/ui';
import { ClarityModule } from '@clr/angular';
import { UpdateEventsPackagesComponent } from './update-events-packages/update-events-packages.component';
import { EventsDataAccessModule } from '@membership-application/events/data-access';
import { EventPackagesDataAccessModule } from '@membership-application/event-packages/data-access';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    EventPackagesDataAccessModule,
    EventPackagesUiModule,
    ClarityModule,
    EventsDataAccessModule,
    CurrenciesDataAccessModule,
    RouterModule.forChild([
      { path: '', component: EventsPackagesListComponent },
    ]),
  ],
  declarations: [
    CreateEventsPackagesComponent,
    DeleteEventsPackagesComponent,
    EventsPackagesListComponent,
    UpdateEventsPackagesComponent,
  ],
})
export class AdminFeatureEventsPackagesModule {}
