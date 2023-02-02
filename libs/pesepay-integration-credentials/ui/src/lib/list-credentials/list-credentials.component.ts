import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { CredentialsEntity } from '@membership-application/pesepay-integration-credentials/data-access';

@Component({
  selector: 'membership-application-list-credentials-ui',
  templateUrl: './list-credentials.component.html',
  styleUrls: ['./list-credentials.component.scss'],
})
export class ListCredentialsComponent {
  @Input() credentialsList: CredentialsEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  @Output() updateSelected = new EventEmitter<CredentialsEntity>();
  @Output() viewCredentialPermissions = new EventEmitter<string | number>();
}
