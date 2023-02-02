import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { EventPackagesEntity } from './event-packages.models';

export const getPaginatedEventPackages = createAction(
  '[EventPackages] Get Paginated EventPackages',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedEventPackagesSuccess = createAction(
  '[EventPackages] Get Paginated EventPackages Success',
  props<{
    eventPackages: EventPackagesEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedEventPackagesFailure = createAction(
  '[EventPackages] Get Paginated EventPackages Failure',
  props<{ error: Error }>()
);

export const createEventPackage = createAction(
  '[EventPackages] Create EventPackage',
  (eventPackageDetails: EventPackagesEntity) => ({
    eventPackageDetails,
  })
);

export const createEventPackageSuccess = createAction(
  '[EventPackages] Create EventPackage Success',
  (eventPackageDetails: EventPackagesEntity) => ({
    eventPackageDetails,
  })
);

export const createEventPackageFailure = createAction(
  '[EventPackages] Create EventPackage Failure',
  props<{ error: Error }>()
);

export const deleteEventPackage = createAction(
  '[EventPackages] Delete EventPackage',
  props<{ eventPackageId: string | number }>()
);

export const deleteEventPackageSuccess = createAction(
  '[EventPackages] Delete EventPackage Success'
);

export const deleteEventPackageFailure = createAction(
  '[EventPackages] Delete EventPackage Failure',
  props<{ error: Error }>()
);

export const updateEventPackage = createAction(
  '[EventPackages] Update EventPackage',
  (eventPackageDetails: EventPackagesEntity) => ({
    eventPackageDetails,
  })
);

export const updateEventPackageSuccess = createAction(
  '[EventPackages] Update EventPackage Success',
  (eventPackageDetails: EventPackagesEntity) => ({
    eventPackageDetails,
  })
);

export const updateEventPackageFailure = createAction(
  '[EventPackages] Update EventPackage Failure',
  props<{ error: Error }>()
);

export const getEventPackageById = createAction(
  '[EventPackages] Get EventPackage',
  props<{ eventPackageId: string | number }>()
);

export const getEventPackageByIdSuccess = createAction(
  '[EventPackages] Get EventPackage Success',
  props<{ eventPackage: EventPackagesEntity }>()
);

export const getEventPackageByIdFailure = createAction(
  '[EventPackages] Get EventPackage Failure',
  props<{ error: any }>()
);

export const getAllEventPackages = createAction(
  '[EventPackages] Get All EventPackages',
  props<{ eventId: any }>()
);

export const getAllEventPackagesSuccess = createAction(
  '[EventPackages] Get All EventPackages Success',
  props<{
    eventPackages: EventPackagesEntity[];
  }>()
);

export const getAllEventPackagesFailure = createAction(
  '[EventPackages] Get All EventPackages Failure',
  props<{ error: Error }>()
);
