import { Action } from '@ngrx/store';
import { Game } from 'src/app/model/game/game.model';

export enum GameActionsTypes {
  ADD = 'ADD',
  ADD_SUCCESS = 'ADD_SUCCESS',
  ADD_ERROR = 'ADD_ERROR',

  GET = 'GET',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',
}

// Add Game
export class AddGame implements Action {
  readonly type = GameActionsTypes.ADD;
  constructor(public payload: Game) {}
}

// Add Game Success
export class AddGameSuccess implements Action {
  readonly type = GameActionsTypes.ADD_SUCCESS;
  constructor(public payload: Game) {}
}

// Add Game Error
export class AddGameError implements Action {
  readonly type = GameActionsTypes.ADD_ERROR;
  constructor(public payload: string) {}
}

// Get Game
export class GetGame implements Action {
  readonly type = GameActionsTypes.GET;
}

// Get Game Success
export class GetGameSuccess implements Action {
  readonly type = GameActionsTypes.GET_SUCCESS;
  constructor(public payload: Game[]) {}
}

// Get Game Error
export class GetGameError implements Action {
  readonly type = GameActionsTypes.GET_ERROR;
  constructor(public payload: string) {}
}

export type GameActions =
  | AddGame
  | AddGameSuccess
  | AddGameError
  | GetGame
  | GetGameSuccess
  | GetGameError;
