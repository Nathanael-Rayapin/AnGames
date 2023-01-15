import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { GameState, gameAdapter } from './games.state';
import { Game } from 'src/app/model/game/game.model';

// Call the Store we want use
export const getGameState = createFeatureSelector<GameState>('game');

// Create the Entity and retrieve Users lists and length
export const {
  selectAll: selectAllGames,
  selectTotal: count,
}: EntitySelectors<Game, EntityState<Game>> = gameAdapter.getSelectors();

// Create Other Selectors
export const loading = (state: GameState) => state.loading;
export const error = (state: GameState) => state.error;

// Export Selectors
export const selectAll = createSelector(getGameState, selectAllGames);
export const selectTotal = createSelector(getGameState, count);
export const selectLoading = createSelector(getGameState, loading);
export const selectError = createSelector(getGameState, error);
