import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { CredentialsEntity } from '@membership-application/pesepay-integration-credentials/data-access';

@Component({
  selector: 'membership-application-pesepay-credentials-form',
  templateUrl: './pesepay-credentials-form.component.html',
  styleUrls: ['./pesepay-credentials-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PesepayCredentialsFormComponent implements OnInit {
  @Input() credentials!: CredentialsEntity;
  @Input() btnState!: ClrLoadingState;
  @Input() title!: string;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  public credentialsForm!: FormGroup;
  public opened = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.credentials) {
      this.credentialsForm.patchValue(this.credentials);
    }
  }

  public createForm() {
    this.credentialsForm = this.formBuilder.group({
      encryptionKey: '',
      integrationKey: '',
      pesepayApplicationCode: '',
      id: '',
    });
  }
}
