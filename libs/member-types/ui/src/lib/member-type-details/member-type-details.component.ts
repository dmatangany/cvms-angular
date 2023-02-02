import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { MemberTypesEntity } from '@membership-application/member-types/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-member-type-details',
  templateUrl: './member-type-details.component.html',
  styleUrls: ['./member-type-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberTypeDetailsComponent {
  @Input() memberType!: MemberTypesEntity;
  @Output() preview = new EventEmitter();
  public decamelize = Utilities.decamelize;
  public nonDisplayableFields = ['deleted', 'id'];

  public isHide(field: string | undefined) {
    return this.nonDisplayableFields.some((element) => element === field);
  }
}
