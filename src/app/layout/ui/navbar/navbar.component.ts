import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AuthData } from 'src/app/service/auth/auth.data';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SongService } from 'src/app/service/song/song.service';
import {
  AuthFeatureStoreActions,
  AuthFeatureStoreState,
} from 'src/app/store/auth/auth.index';
import { RegisterAnimationService } from '../../material/animation/register-animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public registerAnimation: RegisterAnimationService,
    public authData: AuthData,
    public songService: SongService,
    private authService: AuthService,
    private store: Store<AuthFeatureStoreState.AuthState>
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuth$;
  }

  onAuth(value: string): void {
    switch (value) {
      case 'login':
        this.openRegisterModal();
        this.registerAnimation.toLoginForm();
        break;
      case 'signup':
        this.openRegisterModal();
        this.registerAnimation.toSignupForm();
        break;
      default:
        break;
    }
  }

  openRegisterModal(): void {
    this.dialog.open(RegisterComponent, {
      panelClass: [
        'col-12',
        'col-sm-8',
        'col-md-6',
        'col-lg-5',
        'col-xl-4',
        'col-xxl-4',
        'animate__animated',
        'animate__slideInUp',
        'modal-radius',
      ],
      autoFocus: false,
    });
  }

  onActivated(): void {
    this.songService.isMuted = !this.songService.isMuted;
    this.songService.playTheme();
  }

  onHome(): void {
    this.router.navigate(['/home']);
  }

  onLogout(): void {
    this.store.dispatch(new AuthFeatureStoreActions.Logout());
  }
}
