import { AxiosError } from 'axios';
import { Picture } from '../types';
import ApiService from './api-service';

const fetchPictures = async (): Promise<Picture[]> => {
  const { data } = await ApiService.get<Picture[]>('/pictures');
  return data;
};

const deletePictureById = async (id: string): Promise<Picture> => {
  try {
    const { data } = await ApiService.delete<Picture>(`/pictures/${id}`);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const AboutService = {
  fetchPictures,
  deletePictureById,
};

export default AboutService;
