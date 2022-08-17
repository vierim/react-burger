import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import ProtectedRoute from '../protected-route';
import { checkAuthUserThunk } from '../../services/actions/auth/thunks';

import AppHeader from '../app-header';
import IngredientDetails from '../ingredient-details';
import FeedDetails from '../feed-details';
import Modal from '../modal';

import {
  HomePage,
  LoginPage,
  RegistrationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  OrderFeedPage,
  ProfilePage,
  ProfileOrdersPage,
  NotFoundPage,
} from '../../pages';

import styles from './app.module.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation() as any;
  const background = location.state.background;

  const { isAuthChecked, sendRequest } = useSelector((store) => store.user);

  useEffect(() => {
    if (!isAuthChecked && !sendRequest) {
      dispatch(checkAuthUserThunk());
    }
  }, [isAuthChecked, sendRequest, dispatch]);

  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <Switch location={background || location}>
          <Route 
            path="/" 
            exact
          >
            <HomePage />
          </Route>

          <Route
            path="/ingredients/:id"
            children={
              <IngredientDetails header="Детали ингредиента" />
            }
          />

          <Route 
            path="/feed" 
            exact
          >
            <OrderFeedPage />
          </Route>

          <Route 
            path="/feed/:id" 
            children={
              <FeedDetails noModal />
            } 
          />

          <ProtectedRoute 
            path="/login" 
            anonymousOnly 
            exact
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/register" 
            anonymousOnly 
            exact
          >
            <RegistrationPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/forgot-password"
            anonymousOnly
            exact
          >
            <ForgotPasswordPage />
          </ProtectedRoute>

          <ProtectedRoute
            path="/reset-password"
            hasParrentPage="/forgot-password"
            anonymousOnly
            exact
          >
            <ResetPasswordPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/profile"
            authOnly
            exact
          >
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/profile/orders"
            authOnly
            exact
          >
            <ProfileOrdersPage />
          </ProtectedRoute>

          <ProtectedRoute
            path="/profile/orders/:id"
            children={
              <FeedDetails noModal />
            }
            authOnly
            exact
          />

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>

        {background && (
          <Route
            path="/ingredients/:id"
            children={
              <Modal
                closeModal={() => history.goBack()}
                header="Детали ингредиента"
              >
                <IngredientDetails />
              </Modal>
            }
          />
        )}

        {background && (
          <Route
            path="/feed/:id"
            children={
              <Modal closeModal={() => history.goBack()}>
                <FeedDetails />
              </Modal>
            }
          />
        )}

        {background && (
          <Route
            path="/profile/orders/:id"
            children={
              <Modal closeModal={() => history.goBack()}>
                <FeedDetails />
              </Modal>
            }
          />
        )}
      </main>
    </>
  );
};

export default App;
