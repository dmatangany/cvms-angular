import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromPasswordManagement from './password-management.reducer';
import * as PasswordManagementSelectors from './password-management.selectors';
import * as PasswordManagementActions from './password-management.actions';

@Injectable()
export class PasswordManagementFacade {
    loaded$ = this.store.pipe(
        select(PasswordManagementSelectors.getPasswordManagementLoaded)
    );
    allPasswordManagement$ = this.store.pipe(
        select(PasswordManagementSelectors.getAllPasswordManagement)
    );
    selectedPasswordManagement$ = this.store.pipe(
        select(PasswordManagementSelectors.getSelected)
    );

    loading$ = this.store.pipe(
        select(PasswordManagementSelectors.getPasswordManagementLoading)
    );
    btnState$ = this.store.pipe(
        select(PasswordManagementSelectors.getPasswordManagementBtnState)
    );

    constructor(
        private store: Store<fromPasswordManagement.PasswordManagementPartialState>
    ) {}

    dispatch(action: Action) {
        this.store.dispatch(action);
    }

    forgotPassword(forgotPasswordDetails: any) {
        this.store.dispatch(
            PasswordManagementActions.forgotPassword({
                forgotPasswordDetails,
            })
        );
    }

    updatePassword(updatePasswordDetails: any) {
        this.store.dispatch(
            PasswordManagementActions.updatePassword({
                updatePasswordDetails,
            })
        );
    }

    resetPassword(resetPasswordDetails: any) {
        this.store.dispatch(
            PasswordManagementActions.resetPassword({
                resetPasswordDetails,
            })
        );
    }
}
