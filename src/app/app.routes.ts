import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

export const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "messages", component: MessagesPageComponent },
  { path: "", redirectTo: "/messages", pathMatch: "full" },
];
