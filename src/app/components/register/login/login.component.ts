import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterAnimationService } from 'src/app/layout/material/animation/register-animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public registerAnimation: RegisterAnimationService) {}

  onLogin(form: NgForm) {
    console.log(form.value);
    // this.store.dispatch(new AuthFeatureStoreActions.Login(form.value));
  }

  // Animation
  toSignup(): void {
    this.registerAnimation.toSignupForm();
  }
}
