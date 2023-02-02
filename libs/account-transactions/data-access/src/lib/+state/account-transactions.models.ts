import { CurrenciesEntity } from '@membership-application/currencies/data-access';
/**
 * Interface for the 'AccountTransactions' data
 */
export interface AccountTransactionsEntity {
  amount: number;
  createdBy: string;
  createdDate: string;
  currency: CurrenciesEntity;
  dateTimeOfTransaction: Date;
  deleted: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  memberId: string;
  memberName: string;
  subscriptionId: number;
  transactionDescription: string;
  transactionReferenceNumber: string;
  transactionStatus: string;
  version: number;
}

export enum PaymentStatus {
  INITIATED = 'INITIATED',
  PROCESSING = 'PROCESSING',
  PENDING = 'PENDING',
  TERMINATED = 'TERMINATED',
  FAILED = 'FAILED',
  TIME_OUT = 'TIME_OUT',
  CLOSED = 'CLOSED',
  SUCCESS = 'SUCCESS',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  CANCELLED = 'CANCELLED',
  ERROR = 'ERROR',
}
