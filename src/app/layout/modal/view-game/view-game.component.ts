import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GameModel } from 'src/app/components/main-games-space/main-games-space.component';
import { Game } from 'src/app/model/game/game.model';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent implements OnInit {
  isAuth$: Observable<boolean>;
  gameData: object;

  constructor(
    @Inject(MAT_DIALOG_DATA) public game: GameModel,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuth$;
    this.buildModal(this.game.gameData);
  }

  buildModal(gameData: Game): void {
    this.gameData = {
      id: gameData.id,
      title: gameData.title,
      description: gameData.description,
      release_date: gameData.release_date,
      main_theme: gameData.main_theme,
      background_cover: gameData.background_cover,
    };
  }

  // *** Fake Value For Now

  isCommentCreator(comment) {
    // try {
    //   return comment.userId === this.authData.getCurrentUserId();
    // } catch (err) {
    //   console.log(err);
    //   return false;
    // }
    return true;
  }

  onAddComment(commentInput: HTMLInputElement) {
    const newComment = {
      localId: '789',
      creator: 'Julie',
      comment: "Je l'aime trop ce jeu!",
    };

    this.comments.push(newComment);
  }

  comments = [
    {
      localId: '123',
      creator: 'Nathanael',
      comment: 'Hey!',
    },
    {
      localId: '456',
      creator: 'Tony',
      comment: 'Yo Whatup!',
    },
  ];
}
