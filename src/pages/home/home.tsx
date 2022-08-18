import { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Modal from "../../components/modal";
import OrderDetails from "../../components/order-details";
import BurgerIngredients from "../../components/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor";
import AnimatedLoader from "../../components/animated-loader";
import ErrorNotification from "../../components/error-notification";

import { getDataThunk } from "../../services/actions/burger-ingredients/thunks";
import { closeOrderPopupAction } from "../../services/actions/order-details";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.ingredients.data);
  const { dataRequest, dataFailed } = useSelector((store) => store.ingredients);
  const showOrderPopup = useSelector((store) => store.order.showPopup);

  useEffect(() => {
    if (!ingredients.length) dispatch(getDataThunk());
  }, [dispatch, ingredients]);

  const closeOrderDetails = (): void => {
    dispatch(closeOrderPopupAction());
  };

  return (
    <>
      {showOrderPopup && (
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}

      {dataRequest && <AnimatedLoader />}
      {dataFailed && <ErrorNotification />}

      {ingredients.length && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </>
  );
};

export default Home;
