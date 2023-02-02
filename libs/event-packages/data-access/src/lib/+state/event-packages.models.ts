
export interface LatestTimeOfPurchase {
  hour: number;
  minute: number;
  nano: number;
  second: number;
}

export interface EventPackagesEntity {
  amount: number;
  createdBy: string;
  createdDate: string;
  currencyCode: string;
  currencyId: number;
  deleted: boolean;
  eventId: number;
  eventPackageStatus: string;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  latestDateOfPurchase: string;
  latestTimeOfPurchase: LatestTimeOfPurchase;
  name: string;
  quantityAvailable: number;
  version: number;
}

export enum eventPackageStatus {
  Available = 'AVAILABLE',
  OutOfStock = 'OUT_OF_STOCK',
}
