import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import { MemberTypesEntity } from '@membership-application/member-types/data-access';
/**
 * Interface for the 'MemberPackages' data
 */
export interface MemberPackageEntity {
  amount: number;
  createdBy: string;
  createdDate: string;
  currency: CurrenciesEntity;
  defaultPackage: boolean;
  deleted: boolean;
  description: string;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  memberType: MemberTypesEntity;
  name: string;
  overduePeriodInDays: number;
  validityPeriodInDays: number;
  version: number;
}
