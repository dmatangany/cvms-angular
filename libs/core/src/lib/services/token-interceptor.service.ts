import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { AuthenticationService } from '@membership-application/auth/data-access';
import { Utilities } from '@membership-application/shared/utils';
import { EMPTY, Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  private authService: any;

  constructor(public inj: Injector) {
    this.authService = inj.get(AuthenticationService);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('accessToken')) {
      request = this.addAuthHeader(request);
    }

    return next.handle(request).pipe(
      retry(1),
      catchError((error) => this.handleResponseError(error))
    );
  }

  handleResponseError(error: any) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        Utilities.displayToast(
          'error',
          'Connection failed. Please check your network and try again.'
        );
        return throwError(() => error);
      }

      switch ((<HttpErrorResponse>error).status) {
        case 0:
          Utilities.displayToast(
            'error',
            'Connection failed. Please check your network and try again.'
          );
          break;
        case 401:
          //this.logoutUser();
          break;
        case 403:
          Utilities.displayToast(
            'info',
            error.error.message
              ? error.error.message
              : 'Sorry, you are not authorized to perform this action.'
          );
          break;
        default:
          Utilities.displayToast(
            'error',
            error.error.message
              ? error.error.message
              : 'Sorry, there were some technical issues while processing your request. Please try again, or contact support.'
          );
          return throwError(() => error);
      }
    }
    return throwError(() => error);
  }

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable((observer) => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;

      return this.authService.refreshToken().pipe(
        tap((token) => {
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next(token);
        }),
        catchError((err) => {
          this.refreshTokenInProgress = false;
          this.logoutUser();
          return EMPTY;
        })
      );
    }
  }

  logoutUser() {
    this.authService.logout();
    return EMPTY;
  }

  private addAuthHeader(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    });
  }
}
