import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'membership-application-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.css'],
})
export class PhoneNumberFormComponent implements OnInit {
  phoneNumberForm!: UntypedFormGroup;
  @Input() title = '';
  @Input() phoneNumber: any;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  opened = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.phoneNumber) {
      this.phoneNumberForm
        .get('phoneNumber')
        ?.patchValue(this.phoneNumber?.phoneNumber);
    }
  }

  createForm() {
    this.phoneNumberForm = this.fb.group({
      phoneNumber: '',
    });
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    if (changes.phoneNumber?.currentValue) {
      console.log(this.phoneNumber);
      this.phoneNumberForm
        ?.get('phoneNumber')
        .patchValue(this.phoneNumber?.phoneNumber);
    }
  }
}*/
}
