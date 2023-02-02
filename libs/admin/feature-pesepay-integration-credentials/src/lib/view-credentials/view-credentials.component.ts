import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { CredentialsFacade } from '@membership-application/pesepay-integration-credentials/data-access';

@Component({
  selector: 'membership-application-view-credentials',
  templateUrl: './view-credentials.component.html',
  styleUrls: ['./view-credentials.component.scss'],
})
export class ViewCredentialsComponent implements OnInit, AfterViewInit {
  public isUpdate!: boolean;

  constructor(
    public credentialsFacade: CredentialsFacade,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCredentials();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  refresh() {
    this.isUpdate = false;
  }

  getCredentials() {
    //this.credentialsFacade.getCredentials();
  }
}
