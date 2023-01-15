import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterAnimationService } from 'src/app/layout/material/animation/register-animation';
import {
  AuthFeatureStoreActions,
  AuthFeatureStoreState,
} from 'src/app/store/auth/auth.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public registerAnimation: RegisterAnimationService,
    private store: Store<AuthFeatureStoreState.AuthState>
  ) {}

  onLogin(form: NgForm): void {
    this.store.dispatch(new AuthFeatureStoreActions.Login(form.value));
  }

  // Animation
  toSignup(): void {
    this.registerAnimation.toSignupForm();
  }
}
