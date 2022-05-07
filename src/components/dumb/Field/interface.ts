export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
}

export interface StyledProps {
  error?: string;
  touched?: boolean;
}
