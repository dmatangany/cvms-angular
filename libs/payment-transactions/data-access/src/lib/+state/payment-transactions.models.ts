/**
 * Interface for the 'PaymentTransactions' data
 */
export interface PaymentTransactionsEntity {
  amount: number;
  conversionAmount: number;
  createdBy: string;
  createdDate: string;
  currencyCode: string;
  customerEmail: string;
  customerName: string;
  customerPhoneNumber: string;
  dateTimeOfTransaction: Date;
  deleted: boolean;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  memberId: string;
  paymentStatus: string;
  paymentTransactionInitiator: string;
  pesepayReferenceNumber: string;
  pesepayTransactionStatusDescription: string;
  pollUrl: string;
  productReferenceNumber: string;
  redirectUrl: string;
  valueAvailabilityStatus: string;
  version: number;
}
