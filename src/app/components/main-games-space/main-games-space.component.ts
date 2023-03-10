/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { ViewGameComponent } from 'src/app/layout/modal/view-game/view-game.component';
import { Game } from 'src/app/model/game/game.model';
import { SongService } from 'src/app/service/song/song.service';
import {
  GameFeatureStoreSelectors,
  GameFeatureStoreState,
} from 'src/app/store/games/games.index';

import GameList from '../../core/games.json';

@Component({
  selector: 'app-main-games-space',
  templateUrl: './main-games-space.component.html',
  styleUrls: ['./main-games-space.component.scss'],
})
export class MainGamesSpaceComponent implements OnInit {
  games$: Observable<Game[]>;
  gamesBackup$ = new BehaviorSubject<Game[]>(GameList.slice());
  isLoading: boolean = true;

  constructor(
    public dialog: MatDialog,
    public songService: SongService,
    private store: Store<GameFeatureStoreState.GameState>
  ) {}

  ngOnInit(): void {
    this.games$ = this.store.pipe(select(GameFeatureStoreSelectors.selectAll));
  }

  onView(game: Game) {
    this.songService.playTheme(game.main_theme);

    this.dialog.open(ViewGameComponent, {
      panelClass: [
        'col-10',
        'animate__animated',
        'animate__slideInUp',
        'modal-radius',
      ],
      autoFocus: false,
      data: {
        gameData: game,
      },
    });
  }

  onImageLoad(event) {
    if (event && event.target) {
      this.isLoading = false;
    }
  }
}

export interface GameModel {
  gameData: Game;
}
