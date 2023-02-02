import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '@membership-application/shared/data-access';

import { Authenticate, Token } from '../+state/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private apiService: ApiService,
    private readonly router: Router
  ) {}

  clientLogin(credentials: Authenticate) {
    sessionStorage.clear();
    return this.apiService.post<Token>(`/authenticate`, credentials);
  }

  adminLogin(credentials: Authenticate) {
    sessionStorage.clear();
    return this.apiService.post<Token>(`/authenticate`, credentials);
  }

  register(credentials: Authenticate) {
    return this.apiService.post<Token>(`/register`, credentials);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['auth', 'login']).then();
  }
}
