/* eslint-disable no-undef */
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { GameModel } from 'src/app/components/admin-dashboard/admin-dashboard.component';
import { Game } from 'src/app/model/game/game.model';

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
  styleUrls: ['./remove-game.component.scss'],
})
export class RemoveGameComponent implements OnInit {
  games$ = new BehaviorSubject<Game[]>(this.game.gameData);

  // Select
  selectedGame: string;
  currentGame: Game;

  constructor(@Inject(MAT_DIALOG_DATA) public game: GameModel) {}

  ngOnInit(): void {}

  onPreview(): void {
    if (!this.selectedGame) return;
    let postPreviewImage = <HTMLImageElement>(
      document.getElementById('game-preview-image')
    );

    const filteredGame = this.games$.value.filter(
      game => game.title === this.selectedGame
    );
    if (!filteredGame) return;
    this.currentGame = filteredGame[0];
    postPreviewImage.src = filteredGame[0].background_cover;
  }

  onRemove(): void {
    if (!this.selectedGame || !this.currentGame) return;
    const index = this.games$.value.indexOf(this.currentGame);
    this.games$.value.splice(index, 1);
  }
}
