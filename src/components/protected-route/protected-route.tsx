import { useRef } from 'react';
import { useSelector } from '../../services/store';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { IProtectedRouteProps } from './interface';

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  anonymousOnly = false,
  authOnly = false,
  hasParrentPage,
  ...rest
}) => {
  const history = useHistory() as any;
  const ref = useRef();

  const { isAuthChecked, data } = useSelector((store) => store.user);

  if (hasParrentPage) {
    if (history.location.state) {
      if (hasParrentPage !== history.location.state.from) {
        return <Redirect to={hasParrentPage} />;
      }
    } else {
      return <Redirect to={hasParrentPage} />;
    }
  }

  if (anonymousOnly && data !== null) {
    if (ref.current) {
      return <Redirect to={ref.current} />;
    }
    return <Redirect to="/" />;
  }

  if (authOnly && isAuthChecked && data === null) {
    ref.current = history.location.pathname;
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default ProtectedRoute;
