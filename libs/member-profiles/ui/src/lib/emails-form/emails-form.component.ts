import {
  FormGroup,
  FormBuilder,
  Validators,
  UntypedFormGroup,
} from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'membership-application-emails-form',
  templateUrl: './emails-form.component.html',
  styleUrls: ['./emails-form.component.css'],
})
export class EmailsFormComponent implements OnInit {
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  @Input() title = '';
  @Input() email: any;
  emailForm!: UntypedFormGroup;
  constructor(private fb: FormBuilder) {}
  opened = true;
  ngOnInit(): void {
    this.createForm();
    if (this.email) {
      this.emailForm.patchValue(this.email);
    }
  }

  createForm() {
    this.emailForm = this.fb.group({
      email: ['', Validators.email],
    });
  }
}
