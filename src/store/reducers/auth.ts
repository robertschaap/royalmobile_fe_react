import produce from 'immer';

import { AuthToken } from '../../types/auth';
import { AuthActions, AuthActionTypes } from '../ducks/auth';

interface AuthState {
  isFetching: boolean;
  hasError: boolean;
  collection: AuthToken | null;
}

const initialAuthState: AuthState = {
  isFetching: false,
  hasError: false,
  collection: null,
};

export const authReducer = produce((draft: AuthState = initialAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case AuthActions.FETCH_AUTH_TOKEN:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case AuthActions.FETCH_AUTH_TOKEN_SUCCESS:
      draft.isFetching = false;
      draft.collection = action.payload;
      break;
    case AuthActions.FETCH_AUTH_TOKEN_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    default:
      break;
  }

  return draft;
});
