import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@membership-application/shared/ui';
import { CategoriesDataAccessModule } from '@membership-application/categories/data-access';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventsComponent } from './create-events/create-events.component';

import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsUiModule } from '@membership-application/events/ui';
import { EventsDataAccessModule } from '@membership-application/events/data-access';
import { DeleteEventsComponent } from './delete-events/delete-events.component';
import { UpdateEventsComponent } from './update-events/update-events.component';
import { PublishEventComponent } from './publish-event/publish-event.component';
import { UnpublishEventComponent } from './unpublish-event/unpublish-event.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    EventsDataAccessModule,
    SharedUiModule,
    EventsUiModule,
    CategoriesDataAccessModule,
    RouterModule.forChild([
      { path: '', component: EventsListComponent },
      {
        path: 'packages/:eventId',
        loadChildren: () =>
          import('@membership-application/admin/feature-events-packages').then(
            (module) => module.AdminFeatureEventsPackagesModule
          ),
      },
    ]),
  ],
  declarations: [
    CreateEventsComponent,
    DeleteEventsComponent,
    EventsListComponent,
    UpdateEventsComponent,
    PublishEventComponent,
    UnpublishEventComponent,
  ],
})
export class AdminFeatureEventsModule {}
