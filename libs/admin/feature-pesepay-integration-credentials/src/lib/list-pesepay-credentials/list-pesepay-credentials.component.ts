import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  CredentialsFacade,
  CredentialsEntity,
} from '@membership-application/pesepay-integration-credentials/data-access';

@Component({
  selector: 'membership-application-list-pesepay-credentials',
  templateUrl: './list-pesepay-credentials.component.html',
  styleUrls: ['./list-pesepay-credentials.component.scss'],
})
export class ListPesepayCredentialsComponent
  implements OnInit, AfterViewChecked
{
  public placeholderMessage: string | undefined;
  public isUpdate = false;
  public isCreate = false;
  public isDelete = false;

  constructor(
    public credentialsFacade: CredentialsFacade,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  public getCredentialsList(state: ClrDatagridStateInterface) {
    this.credentialsFacade.getPaginatedCredentials(state);
    this.cdr.detectChanges();
  }

  refresh(isRefresh: boolean) {
    this.isUpdate = false;
    this.isCreate = false;
    this.isDelete = false;
    return isRefresh ? this.getCredentialsList({}) : null;
  }

  updateCredential(credential: CredentialsEntity) {
    this.credentialsFacade.getCredential(credential.id);
    this.isUpdate = true;
  }

  deleteCredential(credential: CredentialsEntity) {
    this.credentialsFacade.getCredential(credential.id);
    this.isDelete = true;
  }
}
