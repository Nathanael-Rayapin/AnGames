/* eslint-disable no-undef */
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GameModel } from 'src/app/components/main-games-space/main-games-space.component';
import { Game } from 'src/app/model/game/game.model';
import { CommentModel } from 'src/app/model/comment/comment.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AuthData } from 'src/app/service/auth/auth.data';
import {
  CommentFeatureStoreActions,
  CommentFeatureStoreState,
} from 'src/app/store/comments/comment.index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent implements OnInit {
  isAuth$: Observable<boolean>;
  comments: CommentModel[];
  gameData: object;

  constructor(
    @Inject(MAT_DIALOG_DATA) public game: GameModel,
    public authData: AuthData,
    private authService: AuthService,
    private store: Store<CommentFeatureStoreState.CommentState>
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuth$;
    this.buildModal(this.game.gameData);
    this.comments = this.game.commentData;
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

  isCommentCreator(comment: CommentModel) {
    try {
      return comment.id === this.authData.getCurrentId();
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  onAddComment(commentInput: HTMLInputElement): void {
    if (commentInput.value.trim() === '') return;

    const newComment: CommentModel = {
      gameId: this.game.gameData.id,
      id: this.authData.getCurrentId(),
      pseudo: this.authData.getCustomPseudo(),
      content: commentInput.value,
    };

    this.store.dispatch(new CommentFeatureStoreActions.AddComment(newComment));
    commentInput.value = '';
  }
}
