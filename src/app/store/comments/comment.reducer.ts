/* eslint-disable no-undef */
import { CommentState, commentAdapter, initialState } from './comment.state';
import { CommentActions, CommentActionsTypes } from './comment.action';

export function commentReducer(
  state = initialState,
  action: CommentActions
): CommentState {
  switch (action.type) {
    case CommentActionsTypes.ADD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CommentActionsTypes.ADD_SUCCESS:
      return commentAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case CommentActionsTypes.ADD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CommentActionsTypes.GET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CommentActionsTypes.GET_SUCCESS:
      return commentAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case CommentActionsTypes.GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
