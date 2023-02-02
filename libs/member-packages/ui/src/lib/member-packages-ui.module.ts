import { MemberPackagesListUiComponent } from './member-packages-list-ui/member-packages-list-ui.component';
import { MemberPackageFormComponent } from './member-package-form/member-package-form.component';
import { MemberPackageDetailsComponent } from './member-package-details/member-package-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    MemberPackageDetailsComponent,
    MemberPackageFormComponent,
    MemberPackagesListUiComponent,
  ],
  exports: [
    MemberPackageDetailsComponent,
    MemberPackageFormComponent,
    MemberPackagesListUiComponent,
  ],
})
export class MemberPackagesUiModule {}
