/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import ContactsService from '../../../services/contacts-api-service';
import { Contacts } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  ContactsActionType,
  FetchContactsLoadingAction,
  FetchContactsSuccessAction,
  FetchContactsFailureAction,
} from './contacts-types';

const contactsFetchContactsLoadingAction: FetchContactsLoadingAction = {
  type: ContactsActionType.FETCH_CONTACTS_LOADING,
};

const createFetchContactsSuccessAction = (contacts: Contacts[]): FetchContactsSuccessAction => ({
  type: ContactsActionType.FETCH_CONTACTS_SUCCESS,
  payload: { contacts },
});

const createFetchContactsFailureAction = (error: string): FetchContactsFailureAction => ({
  type: ContactsActionType.FETCH_CONTACTS_FAILURE,
  payload: { error },
});

export const fetchContactsThunkAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(contactsFetchContactsLoadingAction);
  try {
    const contacts = await ContactsService.fetchContacts();

    const fetchContactsSuccessAction = createFetchContactsSuccessAction(contacts);
    dispatch(fetchContactsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fetchContactsFailureAction = createFetchContactsFailureAction(errMsg);
    dispatch(fetchContactsFailureAction);
  }
};
