import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { CommentState, commentAdapter } from './comment.state';
import { CommentModel } from 'src/app/model/comment/comment.model';

// Call the Store we want use
export const getCommentState = createFeatureSelector<CommentState>('comment');

// Create the Entity and retrieve Users lists and length
export const {
  selectAll: selectAllComments,
  selectTotal: count,
}: EntitySelectors<
  CommentModel,
  EntityState<CommentModel>
> = commentAdapter.getSelectors();

// Create Other Selectors
export const loading = (state: CommentState) => state.loading;
export const error = (state: CommentState) => state.error;

// Export Selectors
export const selectAll = createSelector(getCommentState, selectAllComments);
export const selectTotal = createSelector(getCommentState, count);
export const selectLoading = createSelector(getCommentState, loading);
export const selectError = createSelector(getCommentState, error);
