import { Contacts } from '../types';
import ApiService from './api-service';

const fetchContacts = async (): Promise<Contacts[]> => {
  const { data } = await ApiService.get<Contacts[]>('/contacts');
  return data;
};

const ContactsService = {
  fetchContacts,
};

export default ContactsService;
