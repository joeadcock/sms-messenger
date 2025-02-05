import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { ICredentials } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private isSignedInSubject = new BehaviorSubject<boolean>(false)
  public isSignedIn$ = this.isSignedInSubject.asObservable()

  constructor(private http: HttpClient, private router: Router) {
    // Assume logged in if key exists, API calls will fail if invalid
    this.isSignedInSubject.next(!!localStorage.getItem('authToken'))
  }

  login(credentials: ICredentials) {
    localStorage.setItem('authToken',
                         btoa(`${credentials.email}:${credentials.password}`));

    // NOTE: this could be any authenticated endpoint
    this.http.get<any>('/api/messages.json').subscribe({
      next: () => {
        this.isSignedInSubject.next(true)

        this.router.navigate(['/'])
      },
      error: () => {
        localStorage.removeItem('authToken')

        window.location.reload()
      }
    })
  }

  logout() {
    localStorage.removeItem('authToken')
    this.isSignedInSubject.next(false)

    // NOTE: not using router here so that page is reloaded, clearing state
    location.href = '/login'
  }
}
