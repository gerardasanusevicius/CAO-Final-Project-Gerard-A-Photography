import { Picture } from '../../../types';

export type PortfolioState = {
  pictures: Picture[]
};

export type DeletePicture = {
  type: 'DELETE_PICTURE',
  payload: {
    id: string,
    amount: number
  },
};

export type PortfolioAction = DeletePicture;
