export interface Values {
  code0: string;
  code1: string;
  code2: string;
  code3: string;
}

export interface State {
  email: string;
  code?: string;
}

export interface Context {
  userRecovery: State;
  setUserRecovery: React.Dispatch<React.SetStateAction<State>>;
}
