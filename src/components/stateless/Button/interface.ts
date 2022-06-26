import { buttonKind } from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: keyof typeof buttonKind;
  loading?: boolean;
}

export interface Props {
  kind?: keyof typeof buttonKind;
}
