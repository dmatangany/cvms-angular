import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { CredentialsEntity } from '@membership-application/pesepay-integration-credentials/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-pesepay-credentials-details',
  templateUrl: './pesepay-credentials-details.component.html',
  styleUrls: ['./pesepay-credentials-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PesepayCredentialsDetailsComponent {
  @Input() credentials: CredentialsEntity | undefined;
  @Input() loading = true;
  public decamelize = Utilities.decamelize;
  public nonDisplayableFields = ['deleted', 'id', 'version'];

  public isHide(field: string | undefined) {
    return this.nonDisplayableFields.some((element) => element === field);
  }
}
