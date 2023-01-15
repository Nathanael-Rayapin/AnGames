import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterAnimationService } from 'src/app/layout/material/animation/register-animation';
import { User } from 'src/app/model/user/user.model';
import {
  AuthFeatureStoreActions,
  AuthFeatureStoreState,
} from 'src/app/store/auth/auth.index';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(
    public registerAnimation: RegisterAnimationService,
    private store: Store<AuthFeatureStoreState.AuthState>
  ) {}

  // SignUp
  onSignup(form: NgForm) {
    if (form.invalid) return;
    const { pseudo, email, password } = form.value;
    const id = Math.floor(Date.now() * Math.random()).toString();
    const user = new User(id, pseudo, email, password);

    this.store.dispatch(new AuthFeatureStoreActions.SignUp(user));
  }

  // Animation
  toLogin(): void {
    this.registerAnimation.toLoginForm();
  }
}
