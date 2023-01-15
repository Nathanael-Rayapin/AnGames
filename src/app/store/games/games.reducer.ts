/* eslint-disable no-undef */
import { GameState, gameAdapter, initialState } from './games.state';
import { GameActions, GameActionsTypes } from './games.actions';

export function gameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GameActionsTypes.ADD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GameActionsTypes.ADD_SUCCESS:
      return gameAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case GameActionsTypes.ADD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GameActionsTypes.GET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GameActionsTypes.GET_SUCCESS:
      console.log('GET SUCCESS');
      return gameAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case GameActionsTypes.GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
