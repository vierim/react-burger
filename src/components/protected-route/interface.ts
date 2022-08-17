import React from "react";

export interface IProtectedRouteProps {
  path: string;
  anonymousOnly?: boolean;
  authOnly?: boolean;
  exact?: boolean;
  hasParrentPage?: string;
  children?: React.ReactNode | Element;
}
