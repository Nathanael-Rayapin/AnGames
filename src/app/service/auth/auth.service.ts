/* eslint-disable no-undef */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  API = environment.api;
  SIGNUP = environment.signup_api;
  LOGIN = environment.login_api;

  token: string;
  isAuth$ = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<User>({
    id: null,
    email: null,
    password: null,
  });

  constructor(private http: HttpClient) {
    this.initAuth();
  }

  initAuth(): void {
    if (typeof localStorage !== 'undefined') {
      console.log(localStorage);

      const data = JSON.parse(localStorage.getItem('auth'));
      if (data && data.idToken) {
        this.token = data.idToken;
        this.isAuth$.next(true);

        this.currentUser$.next({
          id: data.localId,
          email: data.email,
          password: null,
        });
      }
    }
  }

  signup(user: User): Observable<User> {
    const { email, password } = user;
    return this.http.post<User>(`${this.SIGNUP}`, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  login(user: User): Observable<User> {
    const { email, password } = user;
    return this.http.post<User>(`${this.LOGIN}`, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
