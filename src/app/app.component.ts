import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CommentFeatureStoreActions,
  CommentFeatureStoreState,
} from './store/comments/comment.index';
import {
  GameFeatureStoreActions,
  GameFeatureStoreState,
} from './store/games/games.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angames-project';

  constructor(
    private gameStore: Store<GameFeatureStoreState.GameState>,
    private gameComment: Store<CommentFeatureStoreState.CommentState>
  ) {
    this.gameStore.dispatch(new GameFeatureStoreActions.GetGame());
    this.gameComment.dispatch(new CommentFeatureStoreActions.GetComment());
  }
}
