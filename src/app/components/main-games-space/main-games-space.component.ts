import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewGameComponent } from 'src/app/layout/modal/view-game/view-game.component';
import { Game } from 'src/app/model/game/game.model';
import { SongService } from 'src/app/service/song/song.service';
import GameList from '../../core/games.json';

@Component({
  selector: 'app-main-games-space',
  templateUrl: './main-games-space.component.html',
  styleUrls: ['./main-games-space.component.scss']
})
export class MainGamesSpaceComponent {
  games : Game[] = GameList;

  constructor(
    public dialog: MatDialog,
    public songService: SongService) {}

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
}

export interface GameModel {
  gameData: Game;
}
