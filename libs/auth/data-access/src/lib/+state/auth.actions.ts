import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Authenticate, Token } from './auth.models';

export const clientLogin = createAction(
  '[Auth/API] Client Login',
  props<{ credentials: Authenticate }>()
);

export const clientLoginSuccess = createAction(
  '[Auth/API] Client Login Success',
  props<{ token: Token }>()
);

export const clientLoginFailure = createAction(
  '[Auth/API] Client Login Failure',
  props<{ error: HttpErrorResponse }>()
);

export const adminLogin = createAction(
  '[Auth/API] Admin Login',
  props<{ credentials: Authenticate }>()
);

export const adminLoginSuccess = createAction(
  '[Auth/API] Admin Login Success',
  props<{ token: Token }>()
);

export const adminLoginFailure = createAction(
  '[Auth/API] Admin Login Failure',
  props<{ error: HttpErrorResponse }>()
);

export const register = createAction(
  '[Auth/Register] Register New Member',
  props<{ credentials: any }>()
);

export const registerSuccess = createAction(
  '[Auth/Register] Register Success',
  props<{ token: Token }>()
);

export const registerFailure = createAction(
  '[Auth/Register] Register Failure',
  props<{ error: HttpErrorResponse }>()
);

export const Logout = createAction('[Auth/API] Logout');
