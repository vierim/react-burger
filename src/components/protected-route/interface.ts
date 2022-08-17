import React from "react";

export interface IProtectedRouteProps {
  anonymousOnly: boolean;
  authOnly: boolean;
  hasParrentPage?: string;
  children?: React.ReactNode;
}
