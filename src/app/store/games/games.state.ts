import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Game } from 'src/app/model/game/game.model';

export interface GameState extends EntityState<Game> {
  loading: boolean;
  error: string | null;
}

export const gameAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

const defaultGame = {
  loading: false,
  error: null,
};

export const initialState: GameState = gameAdapter.getInitialState(defaultGame);
