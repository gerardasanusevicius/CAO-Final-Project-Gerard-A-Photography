import { Picture } from '../../../types';

export type ReduxTestState = {
  pictures: Picture[]
};

export type DeletePicture = {
  type: 'DELETE_PICTURE',
  payload: {
    id: string,
    amount: number
  },
};

export type ReduxTestAction = DeletePicture;
