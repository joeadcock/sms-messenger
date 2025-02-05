import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

import { AccountService } from '../account.service';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<any> {
  const authToken = localStorage.getItem('authToken')
  const accountSvc = inject(AccountService)

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${authToken}`,
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  return next(authReq).pipe(
    catchError((val: any, caught: Observable<HttpEvent<unknown>>)  => {
      if (val.status === 401 && !location.href.endsWith("/login")) {
        accountSvc.logout()
      }

      return throwError(caught)
    })
  )
}
