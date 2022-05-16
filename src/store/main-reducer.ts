/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { State, Action } from './types';

const initialState: State = {

  pictures: [
    {
      id: '1',
      title: 'TestImg1',
      src: 'https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=427&q=80',
    },
    {
      id: '2',
      title: 'TestImg2',
      src: 'https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: '3',
      title: 'TestImg3',
      src: 'https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ],
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === 'DELETE_PICTURE') {
    return {
      ...state,
      pictures: state.pictures.filter((picture) => picture.id !== action.payload.id),
      // arba
      // pictures: [...state.pictures.slice(0, action.payload.id), ...state.pictures.slice(action.payload.id + 1)],
    };
  }
  return { ...state };
};

export default mainReducer;
