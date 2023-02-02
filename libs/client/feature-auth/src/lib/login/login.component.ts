import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@membership-application/auth/data-access';

@Component({
  selector: 'membership-application-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isMakePayment = false;
  constructor(public authFacade: AuthFacade, private router: Router) {}

  ngOnInit(): void {}

  login(credentials: any) {
    this.authFacade.clientLogin(credentials);
  }

  forgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }
}
