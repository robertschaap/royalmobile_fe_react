import { AuthToken } from '../../types/auth';
import { StoreState } from '../reducers';

export enum AuthActions {
  FETCH_AUTH_TOKEN = 'FETCH_AUTH_TOKEN',
  FETCH_AUTH_TOKEN_SUCCESS = 'FETCH_AUTH_TOKEN_SUCCESS',
  FETCH_AUTH_TOKEN_ERROR = 'FETCH_AUTH_TOKEN_ERROR',
}

export interface FetchAuthTokenAction {
  type: typeof AuthActions.FETCH_AUTH_TOKEN;
}

export const fetchAuthToken = (): AuthActionTypes => ({
  type: AuthActions.FETCH_AUTH_TOKEN,
});

interface FetchAuthTokenSuccessAction {
  type: AuthActions.FETCH_AUTH_TOKEN_SUCCESS;
  payload: AuthToken;
}

export const fetchAuthTokenSuccess = (payload: AuthToken): AuthActionTypes => ({
  type: AuthActions.FETCH_AUTH_TOKEN_SUCCESS,
  payload,
});

interface FetchAuthTokenErrorAction {
  type: AuthActions.FETCH_AUTH_TOKEN_ERROR;
  error: string;
}

export const fetchAuthTokenError = (error: string): AuthActionTypes => ({
  type: AuthActions.FETCH_AUTH_TOKEN_ERROR,
  error,
});

export type AuthActionTypes =
  | FetchAuthTokenAction
  | FetchAuthTokenSuccessAction
  | FetchAuthTokenErrorAction;

export const selectAuth = (state: StoreState) => state.auth;
