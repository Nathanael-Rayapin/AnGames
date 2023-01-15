import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/register/login/login.component';
import { SignupComponent } from './components/register/signup/signup.component';
import { NavbarComponent } from './layout/ui/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MainGamesSpaceComponent } from './components/main-games-space/main-games-space.component';
import { ViewGameComponent } from './layout/modal/view-game/view-game.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateGameComponent } from './layout/modal/update-game/update-game.component';
import { RemoveGameComponent } from './layout/modal/remove-game/remove-game.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effect';
import { GameEffects } from './store/games/games.effect';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducer';
import { gameReducer } from './store/games/games.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    MainGamesSpaceComponent,
    ViewGameComponent,
    AdminDashboardComponent,
    UpdateGameComponent,
    RemoveGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    DragScrollModule,
    MatTableModule,
    MatSelectModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects, GameEffects]),
    StoreModule.forRoot({ auth: authReducer }),
    StoreModule.forRoot({ game: gameReducer }),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 5 })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
