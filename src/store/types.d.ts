import Picture from '../types/picture';

export type State = {
  pictures: Picture[]
};

export type Action = {
  type: string,
  payload: any,
};
