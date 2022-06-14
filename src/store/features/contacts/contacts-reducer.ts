/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ContactsState, ContactsAction, ContactsActionType } from './contacts-types';

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsReducer: Reducer<ContactsState, ContactsAction> = (state = initialState, action) => {
  switch (action.type) {
    case ContactsActionType.FETCH_CONTACTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ContactsActionType.FETCH_CONTACTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        contacts: action.payload.contacts,
      };
    }

    case ContactsActionType.FETCH_CONTACTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default: return state;
  }
};

export default contactsReducer;
