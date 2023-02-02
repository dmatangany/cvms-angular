import { Component, OnInit, Input } from '@angular/core';
import { Utilities } from '@membership-application/shared/utils';
import { UsersEntity } from '@membership-application/users/data-access';

@Component({
  selector: 'membership-application-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() user!: UsersEntity;

  public decamelize = Utilities.decamelize;
  public nonDisplayableFields = [
    'deleted',
    'id',
    'group',
    'accountNonLocked',
    'accountNonExpired',
    'authorities',
    'version',
  ];

  public isHide(field: string | undefined) {
    return this.nonDisplayableFields.some((element) => element === field);
  }
}
