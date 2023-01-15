import { Action } from '@ngrx/store';
import { Game } from 'src/app/model/game/game.model';

export enum GameActionsTypes {
  ADD_GAME = 'ADD_GAME',
  ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS',
  ADD_GAME_ERROR = 'ADD_GAME_ERROR',

  GET_GAME = 'GET_GAME',
  GET_GAME_SUCCESS = 'GET_GAME_SUCCESS',
  GET_GAME_ERROR = 'GET_GAME_ERROR',
}

// Add Game
export class AddGame implements Action {
  readonly type = GameActionsTypes.ADD_GAME;
  constructor(public payload: Game) {}
}

// Add Game Success
export class AddGameSuccess implements Action {
  readonly type = GameActionsTypes.ADD_GAME_SUCCESS;
  constructor(public payload: Game) {}
}

// Add Game Error
export class AddGameError implements Action {
  readonly type = GameActionsTypes.ADD_GAME_ERROR;
  constructor(public payload: string) {}
}

// Get Game
export class GetGame implements Action {
  readonly type = GameActionsTypes.GET_GAME;
}

// Get Game Success
export class GetGameSuccess implements Action {
  readonly type = GameActionsTypes.GET_GAME_SUCCESS;
  constructor(public payload: Game[]) {}
}

// Get Game Error
export class GetGameError implements Action {
  readonly type = GameActionsTypes.GET_GAME_ERROR;
  constructor(public payload: string) {}
}

export type GameActions =
  | AddGame
  | AddGameSuccess
  | AddGameError
  | GetGame
  | GetGameSuccess
  | GetGameError;
