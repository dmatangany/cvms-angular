import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { UserAuthoritiesFormComponent } from './user-authorities-form/user-authorities-form.component';
import { UserAuthoritiesListUiComponent } from './user-authorities-list-ui/user-authorities-list-ui.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule, ClarityModule],
    declarations: [
        UserAuthoritiesFormComponent,
        UserAuthoritiesListUiComponent,
    ],
    exports: [UserAuthoritiesFormComponent, UserAuthoritiesListUiComponent],
})
export class AccessControlUserAuthoritiesUiModule {}
