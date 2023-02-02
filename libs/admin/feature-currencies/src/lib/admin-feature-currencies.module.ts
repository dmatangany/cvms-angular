import { SharedUiModule } from '@membership-application/shared/ui';
import { RouterModule } from '@angular/router';
import { DeleteCurrencyComponent } from './delete-currency/delete-currency.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { ListCurrenciesComponent } from './list-currencies/list-currencies.component';
import { CreateCurrencyComponent } from './create-currency/create-currency.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { CurrenciesUiModule } from '@membership-application/currencies/ui';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    CurrenciesDataAccessModule,
    CurrenciesUiModule,
    ClarityModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: ListCurrenciesComponent }]),
  ],
  declarations: [
    CreateCurrencyComponent,
    ListCurrenciesComponent,
    UpdateCurrencyComponent,
    DeleteCurrencyComponent,
  ],
})
export class AdminFeatureCurrenciesModule {}
