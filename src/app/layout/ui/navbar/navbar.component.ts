import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { SongService } from 'src/app/service/song/song.service';
import { RegisterAnimationService } from '../../material/animation/register-animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuth$: Observable<boolean>;

  constructor(public dialog: MatDialog,public registerAnimation: RegisterAnimationService, public songService: SongService) {}

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

  onLogout(): void {
    console.log("LOGOUT");
    // this.store.dispatch(new AuthFeatureStoreActions.Logout());
  }
}
