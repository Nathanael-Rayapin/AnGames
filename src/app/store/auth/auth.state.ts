import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from 'src/app/model/user/user.model';

export interface AuthState extends EntityState<User> {
  loading: boolean;
  error: string | null;
}

export const authAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const defaultUser = {
  loading: false,
  error: null,
};

export const initialState: AuthState = authAdapter.getInitialState(defaultUser);
