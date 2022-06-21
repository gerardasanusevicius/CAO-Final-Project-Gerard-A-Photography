import { AxiosError } from 'axios';
import { Picture } from '../types';
import ApiService, { formatError } from './api-service';

const fetchPictures = async (): Promise<Picture[]> => {
  try {
    const { data } = await ApiService.get<Picture[]>('/api/pictures');
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const deletePictureById = async (id: string, token: string): Promise<Picture> => {
  try {
    const { data } = await ApiService.delete<Picture>(`/api/pictures/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const shiftPictureLeft = async (id: string, token: string): Promise<Picture> => {
  try {
    const { data } = await ApiService.patch<Picture>(`/api/pictures/${id}`, {}, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const shiftPictureRight = async (id: string, token: string): Promise<Picture> => {
  try {
    const { data } = await ApiService.patch<Picture>(`/api/pictures/${id}`, {}, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const PortfolioService = {
  fetchPictures,
  deletePictureById,
  shiftPictureLeft,
  shiftPictureRight,
};

export default PortfolioService;
