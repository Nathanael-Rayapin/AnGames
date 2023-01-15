/* eslint-disable no-undef */
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { GameModel } from 'src/app/components/admin-dashboard/admin-dashboard.component';
import { Game } from 'src/app/model/game/game.model';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss'],
})
export class UpdateGameComponent implements OnInit {
  games$ = new BehaviorSubject<Game[]>(this.game.gameData);

  // Select
  selectedGame: string;
  selectedAttr: string;
  value: string;
  selectedImageFile: File;
  currentGame: Game;

  constructor(@Inject(MAT_DIALOG_DATA) public game: GameModel) {}

  ngOnInit(): void {}

  attributs: string[] = [
    'title',
    'description',
    'release_date',
    'main_theme',
    'background_cover',
  ];

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

  onSave(): void {
    if (!this.value) return;
    const index = this.games$.value.indexOf(this.currentGame);
    const gameSelected = this.games$.value[index];
    gameSelected[this.selectedAttr] = this.value;
  }
}
