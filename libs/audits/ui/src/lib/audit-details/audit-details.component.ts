import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuditsEntity } from '@membership-application/audits/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditDetailsComponent {
  @Input() audit: AuditsEntity | undefined;
  public decamelize = Utilities.decamelize;
}
