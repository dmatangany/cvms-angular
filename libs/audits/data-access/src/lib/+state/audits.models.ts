export interface AuditsEntity {
  action: Action;
  dateCreated: Date;
  id: number;
  origin: Origin;
  resource: Resource;
}
export interface Action {
  actionStatus: string;
  date: Date;
  performedBy: string;
  type: string;
}

export interface Origin {
  browser: string;
  country: string;
  host: string;
  operatingSystem: string;
  remoteUser: string;
  serviceName: string;
  sourceIP: string;
  timeZone: string;
  userAgent: string;
}

export interface Resource {
  description: string;
  name: string;
}
