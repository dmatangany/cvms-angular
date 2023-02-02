
import { EventsPackagesFormComponent } from './events-packages-form/events-packages-form.component';
import { EventPackagesDetailsComponent } from './event-packages-details/event-packages-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsPackagesListUiComponent } from './events-packages-list-ui/events-packages-list-ui.component';

@NgModule({
  imports: [CommonModule,ClarityModule,ReactiveFormsModule,],
  declarations: [EventPackagesDetailsComponent,EventsPackagesFormComponent,EventsPackagesListUiComponent],
  exports: [EventPackagesDetailsComponent,EventsPackagesFormComponent,EventsPackagesListUiComponent],
})
export class EventPackagesUiModule {}
