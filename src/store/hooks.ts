/* eslint-disable import/prefer-default-export */
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './types';

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRootDispatch = () => useDispatch<AppDispatch>();
