import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { CredentialsFacade } from '@membership-application/pesepay-integration-credentials/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-create-pesepay-credentials',
  templateUrl: './create-pesepay-credentials.component.html',
  styleUrls: ['./create-pesepay-credentials.component.scss'],
})
export class CreatePesepayCredentialsComponent implements OnInit, OnDestroy {
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
