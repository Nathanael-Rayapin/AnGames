import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthData {
  constructor(private authService: AuthService) {}

  getCurrentId(): string {
    return this.authService.currentUser$.value.id;
  }

  getCurrentPseudo(): string {
    return this.authService.currentUser$.value.pseudo;
  }

  getCurrentEmail(): string {
    return this.authService.currentUser$.value.email;
  }
}
