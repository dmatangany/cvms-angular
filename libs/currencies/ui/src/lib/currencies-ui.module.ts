import { ClarityIcons, pencilIcon, trashIcon } from '@cds/core/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { SharedUiModule } from '@membership-application/shared/ui';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrenciesListUiComponent } from './currencies-list-ui/currencies-list-ui.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
ClarityIcons.addIcons(pencilIcon, trashIcon);
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule,
    SharedUiModule,
  ],
  declarations: [
    CurrencyDetailsComponent,
    CurrenciesListUiComponent,
    CurrencyFormComponent,
  ],
  exports: [
    CurrencyDetailsComponent,
    CurrenciesListUiComponent,
    CurrencyFormComponent,
  ],
})
export class CurrenciesUiModule {}
