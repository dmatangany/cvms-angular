import { createAction, props } from '@ngrx/store';
import { AuthoritiesEntity } from './authorities.models';

export const getAllAuthorities = createAction(
  '[User Manager/Authorities] Get All Authorities'
);

export const getAllAuthoritiesSuccess = createAction(
  '[User Manager/Authorities] Get All Authorities Success',
  props<{ authorities: AuthoritiesEntity[] }>()
);

export const getAllAuthoritiesFailure = createAction(
  '[User Manager/Authorities] Get All Authorities Failure',
  props<{ error: Error }>()
);
