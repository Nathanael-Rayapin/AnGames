import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth.data';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    public router: Router,
    public authData: AuthData,
    private authService: AuthService
  ) {}

  canActivate(): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.authService.isAuth$.subscribe((value: boolean) => {
        const isAuth = value;
        const isAdmin = this.authData.getCurrentId() === environment.adminId;

        if (isAuth && isAdmin) {
          resolve(true);
        } else {
          reject(false);
          this.router.navigate(['/home']);
        }
      });
    });
  }
}
