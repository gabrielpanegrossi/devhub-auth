import { buttonKind } from './style';

export interface Props {
  children: string;
  kind?: keyof typeof buttonKind;
  type?: 'submit' | 'reset' | 'button';
}
