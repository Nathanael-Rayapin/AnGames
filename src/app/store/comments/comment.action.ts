import { Action } from '@ngrx/store';
import { Comment } from 'src/app/model/comment/comment.model';

export enum CommentActionsTypes {
  ADD = 'ADD',
  ADD_SUCCESS = 'ADD_SUCCESS',
  ADD_ERROR = 'ADD_ERROR',

  GET = 'GET',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',
}

// Add Comment
export class AddComment implements Action {
  readonly type = CommentActionsTypes.ADD;
  constructor(public payload: Comment) {}
}

// Add Comment Success
export class AddCommentSuccess implements Action {
  readonly type = CommentActionsTypes.ADD_SUCCESS;
  constructor(public payload: Comment) {}
}

// Add Comment Error
export class AddCommentError implements Action {
  readonly type = CommentActionsTypes.ADD_ERROR;
  constructor(public payload: string) {}
}

// Get Comment
export class GetComment implements Action {
  readonly type = CommentActionsTypes.GET;
}

// Get Comment Success
export class GetCommentSuccess implements Action {
  readonly type = CommentActionsTypes.GET_SUCCESS;
  constructor(public payload: Comment[]) {}
}

// Get Comment Error
export class GetCommentError implements Action {
  readonly type = CommentActionsTypes.GET_ERROR;
  constructor(public payload: string) {}
}

export type CommentActions =
  | AddComment
  | AddCommentSuccess
  | AddCommentError
  | GetComment
  | GetCommentSuccess
  | GetCommentError;
