/**
 * Interface for the 'Categories' data
 */
export interface CategoriesEntity {
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  name: string;
  status: string;
  version: number;
}

export enum categoryStatus {
  DISCOMISSIONED = 'DISCOMISSIONED',
  DEACTIVATED = 'DEACTIVATED',
  ACTIVE = 'ACTIVE',
}
