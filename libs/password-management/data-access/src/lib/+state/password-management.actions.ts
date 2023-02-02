import { createAction, props } from '@ngrx/store';
import { PasswordManagementEntity } from './password-management.models';

export const forgotPassword = createAction(
  '[Password Management/API] Forgot Password',
  props<{ forgotPasswordDetails: any }>()
);

export const forgotPasswordSuccess = createAction(
  '[Password Management/API] Forgot Password Success'
);

export const forgotPasswordFailure = createAction(
  '[Password Management/API] Forgot Password Failure',
  props<{ error: Error }>()
);

export const resetPassword = createAction(
  '[Password Management/API] Reset Password',
  props<{ resetPasswordDetails: any }>()
);

export const resetPasswordSuccess = createAction(
  '[Password Management/API] Reset Password Success'
);

export const resetPasswordFailure = createAction(
  '[Password Management/API] Reset Password Failure',
  props<{ error: Error }>()
);

export const updatePassword = createAction(
  '[Password Management/API] Update Password',
  props<{ updatePasswordDetails: any }>()
);

export const updatePasswordSuccess = createAction(
  '[PasswordManagement] Update Password Success'
);

export const updatePasswordFailure = createAction(
  '[PasswordManagement] Update Password Failure',
  props<{ error: Error }>()
);
