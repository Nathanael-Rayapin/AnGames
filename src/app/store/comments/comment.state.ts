import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Comment } from 'src/app/model/comment/comment.model';

export interface CommentState extends EntityState<Comment> {
  loading: boolean;
  error: string | null;
}

export const commentAdapter: EntityAdapter<Comment> =
  createEntityAdapter<Comment>();

const defaultComment = {
  loading: false,
  error: null,
};

export const initialState: CommentState =
  commentAdapter.getInitialState(defaultComment);
