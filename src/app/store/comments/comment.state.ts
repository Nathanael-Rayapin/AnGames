import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { CommentModel } from 'src/app/model/comment/comment.model';

export interface CommentState extends EntityState<CommentModel> {
  loading: boolean;
  error: string | null;
}

export const commentAdapter: EntityAdapter<CommentModel> =
  createEntityAdapter<CommentModel>();

const defaultComment = {
  loading: false,
  error: null,
};

export const initialState: CommentState =
  commentAdapter.getInitialState(defaultComment);
