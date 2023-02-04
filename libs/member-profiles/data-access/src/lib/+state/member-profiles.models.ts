import { MemberTypesEntity } from '@membership-application/member-types/data-access';
import { UsersEntity } from '@membership-application/users/data-access';
import {MemberAttributesEntity} from "@membership-application/member-attributes/data-access";

export interface MemberProfilesEntity {
  createdBy: string;
  createdDate: string;
  dateJoined: string;
  deleted: boolean;
  approved: boolean;
  joined: boolean;
  emails: string[];
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  mailingAddress: string;
  memberAttributeValues:  Map<MemberAttributesEntity, MemberAttributeValueEntity>;
  memberId: string;
  memberStatusChangeDate: Date;
  memberType: MemberTypesEntity;
  name: string;
  phoneNumbers: string[];
  physicalAddress: string;
  profileImageFileName: string;
  status: string;
  owing: number;
  user: UsersEntity;
  version: number;
}

export interface MemberAttributeValueEntity {
  fieldType: string;
  id: number;
  name: string;
  optional: boolean;
  value: string;
}

export enum statuses {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  TERMINATED = 'TERMINATED',
  SUBSCRIPTION_OVERDUE = 'SUBSCRIPTION_OVERDUE',
}
export interface MemberProfileRequestEntity {
  id: number;
  memberTypeId: number;
}

export interface MemberApprovalEntity {
  approved: boolean;
  memberProfileId: number;
  result: boolean;
}
