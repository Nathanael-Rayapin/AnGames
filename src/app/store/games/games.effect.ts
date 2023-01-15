/* eslint-disable no-undef */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { SnackBarService } from 'src/app/layout/material/snackbar/snackbar';
import { Game } from 'src/app/model/game/game.model';
import { GameService } from 'src/app/service/game/game.service';

import * as fromGameActions from './games.actions';
import { GameActions } from './games.actions';

@Injectable({ providedIn: 'root' })
export class GameEffects {
  constructor(
    public router: Router,
    public dialog: MatDialog,
    private actions: Actions,
    private gameService: GameService,
    private snackbarService: SnackBarService
  ) {}

  buildGames(games: Game[]): Game[] {
    const loadedGames = [];

    for (const key in games) {
      loadedGames.push({
        id: games[key].id,
        title: games[key].title,
        description: games[key].description,
        release_date: games[key].release_date,
        main_theme: games[key].main_theme,
        background_cover: games[key].background_cover,
      });
    }

    return loadedGames;
  }

  Get$: Observable<GameActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromGameActions.GetGame>(fromGameActions.GameActionsTypes.GET),
      switchMap(() =>
        this.gameService.getGame().pipe(
          map((games: Game[]) => {
            return new fromGameActions.GetGameSuccess(this.buildGames(games));
          }),
          catchError((err: string) => {
            return of(new fromGameActions.GetGameError(err));
          })
        )
      )
    )
  );

  Add$: Observable<GameActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromGameActions.AddGame>(fromGameActions.GameActionsTypes.ADD),
      switchMap(action =>
        this.gameService.addGame(action.payload).pipe(
          map((game: Game) => {
            this.snackbarService.openSnackBar('Game Added Successfully', 3);
            return new fromGameActions.AddGameSuccess(game);
          }),
          catchError((err: string) => {
            this.snackbarService.openSnackBar(
              'Authentication Error: Please retry again later!',
              5
            );
            return of(new fromGameActions.AddGameError(err));
          })
        )
      )
    )
  );
}
