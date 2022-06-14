import { Contacts } from '../../../types';

export type ContactsState = {
  contacts: Contacts[],
  loading: boolean,
  error: string | null,
};

export enum ContactsActionType {
  FETCH_CONTACTS_LOADING = 'FETCH_CONTACTS_LOADING',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE',
}

export type FetchContactsLoadingAction = {
  type: ContactsActionType.FETCH_CONTACTS_LOADING,
};

export type FetchContactsSuccessAction = {
  type: ContactsActionType.FETCH_CONTACTS_SUCCESS,
  payload: {
    contacts: Contacts[],
  }
};

export type FetchContactsFailureAction = {
  type: ContactsActionType.FETCH_CONTACTS_FAILURE,
  payload: {
    error: string,
  }
};

export type ContactsAction = FetchContactsLoadingAction | FetchContactsSuccessAction | FetchContactsFailureAction;
