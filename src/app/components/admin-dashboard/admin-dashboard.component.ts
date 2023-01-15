/* eslint-disable no-undef */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { RemoveGameComponent } from 'src/app/layout/modal/remove-game/remove-game.component';
import { UpdateGameComponent } from 'src/app/layout/modal/update-game/update-game.component';
import { Game } from 'src/app/model/game/game.model';
import { GameFeatureStoreActions, GameFeatureStoreState } from 'src/app/store/games/games.index';
import GamesList from '../../core/games.json';

// import { GameFeatureStoreState } from 'src/app/store/games/games.index';
// import { GameFeatureStoreActions } from 'src/app/store/games/games.index';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  games$ = new BehaviorSubject<Game[]>(GamesList.slice());
  displayedColumns: string[] = [
    'title',
    'background_cover',
    'description',
    'main_theme',
    'release_date',
  ];

  // New Game
  newTitle: string = '';
  newCover: string = '';
  newDescription: string = '';
  newRelease: string = '';
  newTheme: string = '';

  // isUpdating
  isUpdating: boolean = false;

  constructor(
    public dialog: MatDialog,
    private store: Store<GameFeatureStoreState.GameState>
  ) {}

  ngOnInit(): void {}

  addGame(): void {
    if (this.manageError() || this.isUpdating) return;

    const newGame: Game = {
      id: this.games$.value.length,
      title: '',
      description: '',
      release_date: '',
      main_theme: '',
      background_cover: '',
    };

    this.games$.next([...this.games$.value, newGame]);
    this.isUpdating = true;
  }

  saveGame(): void {
    if (
      !this.newCover ||
      !this.newDescription ||
      !this.newRelease ||
      !this.newTitle ||
      !this.newTheme
    )
      return;

    const index = this.games$.value.length - 1;
    const updatedGame = this.games$.value[index];

    updatedGame.background_cover = this.newCover;
    updatedGame.description = this.newDescription;
    updatedGame.release_date = this.newRelease;
    updatedGame.title = this.newTitle;
    updatedGame.main_theme = this.newTheme;

    this.store.dispatch(new GameFeatureStoreActions.AddGame(updatedGame));
    this.isUpdating = false;
  }

  updateGames(): void {
    this.dialog.open(UpdateGameComponent, {
      panelClass: [
        'col-12',
        'col-sm-8',
        'col-md-6',
        'col-lg-5',
        'col-xl-4',
        'col-xxl-4',
        'animate__animated',
        'animate__slideInUp',
        'modal-radius',
      ],
      data: {
        gameData: this.games$.value,
      },
      autoFocus: false,
    });
  }

  removeGame(): void {
    this.dialog.open(RemoveGameComponent, {
      panelClass: [
        'col-12',
        'col-sm-8',
        'col-md-6',
        'col-lg-5',
        'col-xl-4',
        'col-xxl-4',
        'animate__animated',
        'animate__slideInUp',
        'p-0',
      ],
      data: {
        gameData: this.games$.value,
      },
      autoFocus: false,
    });
  }

  manageError(): boolean {
    let error: boolean = false;
    const lastGameIndex = this.games$.value.length - 1;
    Object.values(this.games$.value[lastGameIndex]).forEach(value => {
      if (value === '' || value === null || value === 'undefined') {
        error = true;
      }
    });

    return error;
  }
}

export interface PeriodicElement {
  id: number;
  title: string;
  description: string;
  release_date: string;
}

export interface GameModel {
  gameData: Game[];
}
