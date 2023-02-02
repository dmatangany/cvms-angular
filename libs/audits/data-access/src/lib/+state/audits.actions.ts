import { createAction, props } from '@ngrx/store';
import { AuditsEntity } from './audits.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const loadAudits = createAction(
  '[Audits] Load Audits',
  props<{ state: ClrDatagridStateInterface }>()
);

export const loadAuditsSuccess = createAction(
  '[Audits] Load Audits Success',
  props<{ audits: AuditsEntity[]; total: number; page: number }>()
);

export const loadAuditsFailure = createAction(
  '[Audits] Load Audits Failure',
  props<{ error: any }>()
);

export const loadClientAudits = createAction(
  '[Audits] Load Client Audits',
  props<{ fromDate: string; state: ClrDatagridStateInterface }>()
);

export const loadClientAuditsSuccess = createAction(
  '[Audits] Load Client Audits Success',
  props<{ audits: AuditsEntity[]; total: number; page: number }>()
);

export const loadClientAuditsFailure = createAction(
  '[Audits] Load Client Audits Failure',
  props<{ error: any }>()
);

export const loadAuditsByPerformer = createAction(
  '[Audits] Load Audits By Performer For Period',
  props<{
    fromDate: string;
    username: string;
    state: ClrDatagridStateInterface;
  }>()
);

export const loadAuditsByPerformerSuccess = createAction(
  '[Audits] Load Audits By Performer For Period Success',
  props<{ audits: AuditsEntity[]; total: number; page: number }>()
);

export const loadAuditsByPerformerFailure = createAction(
  '[Audits] Load Audits By Performer For Period Failure',
  props<{ error: any }>()
);

export const loadAuditsById = createAction(
  '[Audits] Load Audits By Id',
  props<{
    fromDate: string;
    username: string;
    state: ClrDatagridStateInterface;
  }>()
);

export const loadAuditsByIdSuccess = createAction(
  '[Audits] Load Audits By Id Success',
  props<{ audits: AuditsEntity }>()
);

export const loadAuditsByIdFailure = createAction(
  '[Audits] Load Audits By Id Failure',
  props<{ error: any }>()
);
