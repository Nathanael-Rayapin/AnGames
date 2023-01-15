import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  title = 'angames-project';

  constructor(private store: Store<GameFeatureStoreState.GameState>) {
    this.store.dispatch(new GameFeatureStoreActions.GetGame());
  }
}
