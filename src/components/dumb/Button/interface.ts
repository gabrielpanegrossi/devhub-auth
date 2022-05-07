import { buttonKind } from './style';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: keyof typeof buttonKind;
  loading?: boolean;
}
