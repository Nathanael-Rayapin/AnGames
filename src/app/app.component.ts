import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  CommentFeatureStoreActions,
  CommentFeatureStoreState,
} from './store/comments/comment.index';
import {
  GameFeatureStoreActions,
  GameFeatureStoreSelectors,
  GameFeatureStoreState,
} from './store/games/games.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angames-project';
  loading$: Observable<boolean>;

  constructor(
    private gameStore: Store<GameFeatureStoreState.GameState>,
    private gameComment: Store<CommentFeatureStoreState.CommentState>
  ) {
    this.loading$ = this.gameStore.pipe(
      select(GameFeatureStoreSelectors.selectLoading)
    );
    this.gameStore.dispatch(new GameFeatureStoreActions.GetGame());
    this.gameComment.dispatch(new CommentFeatureStoreActions.GetComment());
  }
}
