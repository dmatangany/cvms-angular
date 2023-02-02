import { UsersEntity } from '@membership-application/users/data-access';
import { AuthoritiesEntity } from '@membership-application/access-control/authorities/data-access';

export interface UserAuthoritiesEntity {
  authority: AuthoritiesEntity;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  user: UsersEntity;
  version: number;
}
