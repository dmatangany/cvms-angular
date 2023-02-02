import { GroupsEntity } from '@membership-application/groups/data-access';
import { AuthoritiesEntity } from '@membership-application/access-control/authorities/data-access';

export interface GroupAuthoritiesEntity {
  authority: AuthoritiesEntity;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  group: GroupsEntity;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  version: number;
}
