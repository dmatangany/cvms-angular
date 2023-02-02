import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLoginFormComponent implements OnInit {
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  public loginForm = new UntypedFormGroup({});

  constructor() {}

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  }
}
