import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styledDate from "../../utils/date";
import { WS_URL } from "../../utils/constants";

import { WS_CONNECTION_START } from "../../services/actions/orders";
import { getData } from "../../services/actions/burger-ingredients";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import FeedImage from "../feed-image";

import styles from "./feed-details.module.css";

const FeedDetails = ({ header }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { id } = useParams();
  const { orders } = useSelector((store) => store.feed);
  const ingredientsList = useSelector((store) => store.ingredients.data);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!location.state) {
      dispatch({ type: WS_CONNECTION_START, payload: WS_URL.feed });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ingredientsList.length && !location.state) {
      dispatch(getData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getPrice = (orderIngredients) => {
      const res = orderIngredients.reduce((prev, item) => {
        const currentIngredient = ingredientsList.find((el) => el._id === item);

        return prev + currentIngredient.price;
      }, 0);

      return res;
    };

    const getIngredientsList = (ingredients) => {
      const res = ingredients.map((item) => {
        const current = ingredientsList.find((el) => el._id === item);

        return {
          id: current._id,
          name: current.name,
          image: current.image_mobile,
          count: 1,
          price: current.price,
        };
      });

      return res;
    };

    if (orders.length && ingredientsList.length) {
      const currentOrder = orders.find((item) => item._id === id);

      if (currentOrder) {
        const number = currentOrder.number;
        const name = currentOrder.name;
        const status = currentOrder.status;
        const updateAt = styledDate(currentOrder.updatedAt);
        const price = getPrice(currentOrder.ingredients);
        const ingredients = getIngredientsList(currentOrder.ingredients);

        setState({
          number,
          name,
          status,
          ingredients,
          updateAt,
          price,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, ingredientsList]);

  return (
    <div className={styles.container}>
      {header && <h2 className="mt-30 text text_type_main-large">{header}</h2>}
      {state && (
        <>
          <p className="text text_type_digits-default mb-10">#{state.number}</p>
          <h2 className="text text_type_main-medium mb-3">{state.name}</h2>
          <p className="text text_type_main-default mb-15">{state.status}</p>
          <h3 className="text text_type_main-medium mb-6">Состав:</h3>
          <div className={styles.ingredients + " mb-10"}>
            <ul className={styles.list}>
              {state.ingredients.length &&
                state.ingredients.map(({ id, name, image, count, price }) => {
                  return (
                    <li key={id} className={styles.item}>
                      <FeedImage image={image} overlap="1" />
                      <p className="text text_type_main-default ml-4">{name}</p>
                      <div className={styles.summary}>
                        <div className="mr-2">
                          <p className="text text_type_digits-default">
                            {count} x {price}
                          </p>
                        </div>
                        <CurrencyIcon type="primary" />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.bottom}>
            <p className="text text_type_main-default text_color_inactive">
              {state.updateAt}
            </p>
            <div className={styles.price}>
              <span className="text text_type_digits-default mr-2 ml-6">
                {state.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedDetails;