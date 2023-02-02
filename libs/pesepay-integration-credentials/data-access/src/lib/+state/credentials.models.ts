/**
 * Interface for the 'Credentials' data
 */
export interface CredentialsEntity {
  createdBy: string;
  createdDate: string;
  deleted: boolean;
  encryptionKey: string;
  id: number;
  integrationKey: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  version: number;
}
