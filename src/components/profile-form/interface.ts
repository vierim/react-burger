export interface IProfileFormState {
  name: string;
  email: string;
  password: string;
}

export interface IProfileFormFieldState {
  name: string;
  value: string;
  ref: React.RefObject<HTMLInputElement> | undefined;
}
