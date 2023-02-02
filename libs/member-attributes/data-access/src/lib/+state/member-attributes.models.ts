import { MemberTypesEntity } from '@membership-application/member-types/data-access';
/**
 * Interface for the 'MemberAttributes' data
 */
export interface MemberAttributesEntity {
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  displayName: string;
  fieldType: string;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  memberType: MemberTypesEntity;
  name: string;
  optional: boolean;
  version: number;
}
export const fieldTypes = ['TEXT', 'DATE', 'NUMBER', 'LIST', 'SET', 'BOOLEAN'];
