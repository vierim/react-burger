import { ReactNode } from 'react';

export interface IProtectedRouteProps {
  path: string;
  anonymousOnly?: boolean;
  authOnly?: boolean;
  exact?: boolean;
  hasParrentPage?: string;
  children?: ReactNode | Element;
}

export interface IFeedDetailsParams {
  from?: string;
  pathname: string;
}
