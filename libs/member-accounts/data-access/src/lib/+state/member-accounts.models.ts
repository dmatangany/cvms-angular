import { CurrenciesEntity } from '@membership-application/currencies/data-access';

/**
 * Interface for the 'MemberAccounts' data
 */
export interface MemberAccountsEntity {
  accountHolderName: string;
  accountHolderSurname: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  createdBy: string;
  createdDate: string;
  currency: CurrenciesEntity;
  deleted: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  overdraft: boolean;
  overdraftAmount: number;
  version: number;
}
