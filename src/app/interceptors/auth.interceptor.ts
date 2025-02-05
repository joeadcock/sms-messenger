import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<any> {
  const authToken = localStorage.getItem('authToken')

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${authToken}`,
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  return next(authReq).pipe(
    catchError((val: any, caught: Observable<HttpEvent<unknown>>)  => {
      if (val.status === 401 && !location.href.endsWith("/login")) {
        localStorage.removeItem('authToken')
        location.href = '/login'
      }

      return throwError(caught)
    })
  )
}
