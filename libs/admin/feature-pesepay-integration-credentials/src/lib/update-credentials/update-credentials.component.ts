import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import {
  CredentialsEntity,
  CredentialsFacade,
} from '@membership-application/pesepay-integration-credentials/data-access';

@Component({
  selector: 'membership-application-update-credentials',
  templateUrl: './update-credentials.component.html',
  styleUrls: ['./update-credentials.component.scss'],
})
export class UpdateCredentialsComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  private loadedSubscription = new Subscription();

  constructor(public credentialsFacade: CredentialsFacade) {}

  ngOnInit(): void {}

  onSubmit(pesepayCredentials: any) {
    this.credentialsFacade.updateCredential(pesepayCredentials);
    this.loadedSubscription = this.credentialsFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}
