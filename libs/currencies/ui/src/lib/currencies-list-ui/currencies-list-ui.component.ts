import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'membership-application-currencies-list-ui',
  templateUrl: './currencies-list-ui.component.html',
  styleUrls: ['./currencies-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrenciesListUiComponent {
  @Input() currenciesList: CurrenciesEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<CurrenciesEntity>();
  @Output() deleteSelected = new EventEmitter<CurrenciesEntity>();
}
