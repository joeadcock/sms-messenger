import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountService } from '../account.service';

@Component({
  selector: 'sms-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSignedIn: boolean = false

  constructor(private accountSvc: AccountService)  {
    this.accountSvc.isSignedIn$.subscribe({
      next: (signedIn) => { this.isSignedIn = signedIn }
    })
  }

  logout() {
    this.accountSvc.logout()
  }
}
