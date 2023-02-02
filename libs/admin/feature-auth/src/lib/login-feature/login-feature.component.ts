import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthFacade,
  Authenticate,
} from '@membership-application/auth/data-access';

@Component({
  selector: 'membership-application-login-feature',
  templateUrl: './login-feature.component.html',
  styleUrls: ['./login-feature.component.scss'],
})
export class LoginFeatureComponent implements OnInit {
  constructor(public authFacade: AuthFacade, private router: Router) {}

  ngOnInit(): void {}

  login(credentials: Authenticate) {
    this.authFacade.adminLogin(credentials);
  }

  forgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }
}
