export interface Props {
  label: string;
  name: string;
  onChangeFunction: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}
