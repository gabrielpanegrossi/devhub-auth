import { useSelector } from 'react-redux';
import { Store } from './interface';

export default function UseSelector() {
  const store = useSelector((state: Store) => state);

  return store;
}
