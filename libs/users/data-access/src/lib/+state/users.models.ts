import { GroupsEntity } from '@membership-application/groups/data-access';

export interface UsersEntity {
  authProvider: string;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  email: string;
  enabled: boolean;
  firstName: string;
  group: Group;
  id: number;
  membershipIndex: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastName: string;
  title: string;
  username: string;
  version: number;
}

export interface CreateUserContext {
  email: string;
  firstName: string;
  groupId: number;
  lastName: string;
}


export interface Group {
  id: string;
  name: string;
}
