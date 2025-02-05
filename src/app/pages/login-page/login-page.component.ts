import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ICredentials } from '../../user.model';
import { AccountService } from '../../account.service';

@Component({
  selector: 'sms-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  credentials: ICredentials = { email: '', password: '' }

  constructor(private router:Router, private accountSvc: AccountService) {}

  login() {
    this.accountSvc.login(this.credentials)
  }
}
