import { About } from '../types';
import ApiService from './api-service';

const fetchAbout = async (): Promise<About[]> => {
  const { data } = await ApiService.get<About[]>('/about');
  return data;
};

const AboutService = {
  fetchAbout,
};

export default AboutService;
