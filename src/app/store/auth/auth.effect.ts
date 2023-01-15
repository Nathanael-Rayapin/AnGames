/* eslint-disable no-undef */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { RegisterAnimationService } from 'src/app/layout/material/animation/register-animation';
import { SnackBarService } from 'src/app/layout/material/snackbar/snackbar';
import { User } from 'src/app/model/user/user.model';
import { AuthService } from 'src/app/service/auth/auth.service';

import * as fromAuthActions from './auth.action';
import { AuthActions } from './auth.action';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public registerAnimation: RegisterAnimationService,
    private actions: Actions,
    private authService: AuthService,
    private snackbarService: SnackBarService
  ) {}

  setDataOn(data: User | any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('auth', JSON.stringify(data));
    }
    this.authService.isAuth$.next(true);

    this.authService.currentUser$.next({
      id: data.localId,
      pseudo: data.displayName,
      email: data.email,
      password: null,
    });

    // this.calculateRemainingTime(data.expiresIn);
  }

  setDataOff(): void {
    if (localStorage.getItem('auth')) {
      localStorage.removeItem('auth');
      this.authService.isAuth$.next(false);

      this.authService.currentUser$.next({
        id: null,
        pseudo: null,
        email: null,
        password: null,
      });

      this.router.navigate([`/`]);
    }
  }

  calculateRemainingTime(expiresIn: string) {
    const expirationTime = new Date(new Date().getTime() + +expiresIn * 1000);
    const currenrTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currenrTime;
    setTimeout(this.setDataOff, remainingDuration);
  }

  SignUp$: Observable<AuthActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromAuthActions.SignUp>(fromAuthActions.AuthActionsTypes.SIGNUP),
      switchMap(action =>
        this.authService.signup(action.payload).pipe(
          map((user: User) => {
            this.snackbarService.openSnackBar('User Created Successfully', 3);
            this.registerAnimation.toLoginForm();
            return new fromAuthActions.SignUpSuccess(user);
          }),
          catchError((err: string) => {
            this.snackbarService.openSnackBar(
              'Authentication Error: Please retry again later!',
              5
            );
            return of(new fromAuthActions.SignUpError(err));
          })
        )
      )
    )
  );

  Login$: Observable<AuthActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromAuthActions.Login>(fromAuthActions.AuthActionsTypes.LOGIN),
      switchMap(action =>
        this.authService.login(action.payload).pipe(
          map((user: User | any) => {
            this.snackbarService.openSnackBar('You are now Connected', 3);
            this.setDataOn(user);

            this.dialog.closeAll();
            this.router.navigate([`/main-games`]);
            return new fromAuthActions.LoginSuccess(user);
          }),
          catchError((err: string) => {
            this.snackbarService.openSnackBar(
              'Authentication Error: Please retry again later!',
              5
            );
            console.log(err);
            return of(new fromAuthActions.LoginError(err));
          })
        )
      )
    )
  );

  Logout$: Observable<AuthActions> = createEffect(
    () =>
      this.actions.pipe(
        ofType<fromAuthActions.Logout>(fromAuthActions.AuthActionsTypes.LOGOUT),
        tap(() => {
          return this.setDataOff();
        })
      ),
    { dispatch: false }
  );
}
