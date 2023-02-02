import { AccountTransactionsDetailsComponent } from './account-transactions-details/account-transactions-details.component';
import { AccountsTransactionsListUiComponent } from './accounts-transactions-list-ui/accounts-transactions-list-ui.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    AccountsTransactionsListUiComponent,
    AccountTransactionsDetailsComponent,
	FilterPipe,
  ],
  exports: [
    AccountsTransactionsListUiComponent,
    AccountTransactionsDetailsComponent,
  ],
})
export class AccountTransactionsUiModule {}
