import { useDispatch as reduxDispatch } from 'react-redux';
import { store } from '../state';

export const useDispatch = () => reduxDispatch<typeof store.dispatch>();
