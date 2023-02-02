import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyDetailsComponent {
  @Input() currency: CurrenciesEntity | undefined;
  public decamelize = Utilities.decamelize;
  public nonDisplayableFields = ['deleted', 'id', 'version'];

  public isHide(field: string | undefined) {
    return this.nonDisplayableFields.some((element) => element === field);
  }
}
