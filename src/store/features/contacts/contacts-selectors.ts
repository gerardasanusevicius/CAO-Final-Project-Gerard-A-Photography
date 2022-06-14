import { RootState } from '../../redux-types';

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectContactsLoading = (state: RootState) => state.contacts.loading;
