import { AxiosError } from 'axios';
import { Picture } from '../types';
import ApiService from './api-service';

const fetchPictures = async (): Promise<Picture[]> => {
  const { data } = await ApiService.get<Picture[]>('/pictures');
  return data;
};

const fetchPicturesById = async (id: string): Promise<Picture> => {
  try {
    const { data } = await ApiService.get<Picture>(`/pictures/${id}`);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const fetchPicturesByIds = async (ids: string[]): Promise<Picture[]> => Promise.all(ids.map(fetchPicturesById));

const PortfolioService = {
  fetchPictures,
  fetchPicturesById,
  fetchPicturesByIds,
};

export default PortfolioService;
