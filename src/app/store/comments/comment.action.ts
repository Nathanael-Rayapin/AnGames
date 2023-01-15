import { Action } from '@ngrx/store';
import { CommentModel } from 'src/app/model/comment/comment.model';

export enum CommentActionsTypes {
  ADD_COMMENT = 'ADD_COMMENT',
  ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR',

  GET_COMMENT = 'GET_COMMENT',
  GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS',
  GET_COMMENT_ERROR = 'GET_COMMENT_ERROR',
}

// Add Comment
export class AddComment implements Action {
  readonly type = CommentActionsTypes.ADD_COMMENT;
  constructor(public payload: CommentModel) {}
}

// Add Comment Success
export class AddCommentSuccess implements Action {
  readonly type = CommentActionsTypes.ADD_COMMENT_SUCCESS;
  constructor(public payload: CommentModel) {}
}

// Add Comment Error
export class AddCommentError implements Action {
  readonly type = CommentActionsTypes.ADD_COMMENT_ERROR;
  constructor(public payload: string) {}
}

// Get Comment
export class GetComment implements Action {
  readonly type = CommentActionsTypes.GET_COMMENT;
}

// Get Comment Success
export class GetCommentSuccess implements Action {
  readonly type = CommentActionsTypes.GET_COMMENT_SUCCESS;
  constructor(public payload: CommentModel[]) {}
}

// Get Comment Error
export class GetCommentError implements Action {
  readonly type = CommentActionsTypes.GET_COMMENT_ERROR;
  constructor(public payload: string) {}
}

export type CommentActions =
  | AddComment
  | AddCommentSuccess
  | AddCommentError
  | GetComment
  | GetCommentSuccess
  | GetCommentError;
