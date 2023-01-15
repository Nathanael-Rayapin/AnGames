import { Component } from '@angular/core';
import {
  RegisterAnimation,
  RegisterAnimationService,
} from 'src/app/layout/material/animation/register-animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [RegisterAnimation],
})
export class RegisterComponent {
  constructor(public registerAnimation: RegisterAnimationService) {}
}
