export interface Values {
  email: string;
}

export interface State {
  email?: string;
  token?: string;
}

export interface Context {
  useRecovery: State;
  setUserRecovery: React.Dispatch<React.SetStateAction<State>>;
}
