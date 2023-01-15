/* eslint-disable no-undef */
import { CommentState, commentAdapter, initialState } from './comment.state';
import { CommentActions, CommentActionsTypes } from './comment.action';

export function commentReducer(
  state = initialState,
  action: CommentActions
): CommentState {
  switch (action.type) {
    case CommentActionsTypes.ADD_COMMENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CommentActionsTypes.ADD_COMMENT_SUCCESS:
      return commentAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case CommentActionsTypes.ADD_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CommentActionsTypes.GET_COMMENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CommentActionsTypes.GET_COMMENT_SUCCESS:
      return commentAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case CommentActionsTypes.GET_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
