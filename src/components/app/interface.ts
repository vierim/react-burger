import { TBackground } from "../../types";

export interface ILocationState {
  pathname: string;
  search: string;
  hash: string;
  state: undefined | null | {
    background: TBackground;
  };
  key: string;
}
