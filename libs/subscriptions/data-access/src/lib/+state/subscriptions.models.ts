import { MemberPackageEntity } from '@membership-application/member-packages/data-access';
import { MemberProfilesEntity } from '@membership-application/member-profiles/data-access';
import { AccountTransactionsEntity } from '@membership-application/account-transactions/data-access';

export interface SubscriptionsEntity {
  accountsPaymentTransaction?: AccountTransactionsEntity;
  amountPaid: number;
  calculationType: string;
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  endDate: Date;
  expired: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  member: MemberProfilesEntity;
  membershipPackage: MemberPackageEntity;
  startDate: Date;
  version: number;
  subscriptionId: string;
}
