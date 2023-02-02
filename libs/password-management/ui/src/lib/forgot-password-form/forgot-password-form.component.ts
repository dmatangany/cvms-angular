import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent implements OnInit {
  @Input() title = '';
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Output() formValue = new EventEmitter();
  @Output() token = new EventEmitter();
  public forgotPasswordForm = new UntypedFormGroup({});
  public username: string = '';

  public opened = true;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {}
}
