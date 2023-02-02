import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

import { AuditsEntity } from '@membership-application/audits/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-audits-list-ui',
  templateUrl: './audits-list-ui.component.html',
  styleUrls: ['./audits-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditsListUiComponent {
  @Input() auditsList: AuditsEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<AuditsEntity>();
  public decamelize = Utilities.decamelize;
}
