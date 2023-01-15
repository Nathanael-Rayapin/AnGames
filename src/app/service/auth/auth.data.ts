import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthData {
  constructor(private authService: AuthService) {}

  getCurrentId(): string {
    return this.authService.currentUser$.value.id;
  }

  getCustomPseudo(): string {
    return this.authService.currentUser$.value.email.split('@')[0];
  }

  getCurrentEmail(): string {
    return this.authService.currentUser$.value.email;
  }

  getCurrentIsAuth(): boolean {
    return this.authService.isAuth$.value;
  }
}
