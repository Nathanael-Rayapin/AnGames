import { state, style, trigger } from '@angular/animations';
import { Injectable } from '@angular/core';

export const RegisterAnimation = [
  trigger('titleForm', [
    state(
      'signup',
      style({
        transform: 'translateX(0)',
        transition: 'all .5s',
      })
    ),
    state(
      'login',
      style({
        transform: 'translateX(-100%)',
        transition: 'all .5s',
      })
    ),
  ]),
];

@Injectable({ providedIn: 'root' })
export class RegisterAnimationService {
  titleForm: string = '';

  toLoginForm(): void {
    this.titleForm = 'login';
  }

  toSignupForm(): void {
    this.titleForm = 'signup';
  }
}
