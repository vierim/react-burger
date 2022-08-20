import { TIngredient, TOrder, TSortResult } from '../types';

export { calculateOrderCost, getPreviewsList, compareOrdersDate };

function calculateOrderCost(
  orderIdList: string[],
  ingredientsData: TIngredient[]
): number {
  return orderIdList.reduce((prev, item) => {
    const currentIngredient: TIngredient | undefined = ingredientsData.find(
      (el: TIngredient) => el._id === item
    );

    if (typeof currentIngredient !== 'undefined') {
      return prev + currentIngredient.price;
    } else {
      return prev;
    }
  }, 0);
}

function getPreviewsList(
  orderIdList: string[],
  ingredientsData: TIngredient[]
) {
  const res: string[] = [];

  orderIdList.forEach((item) => {
    const current = ingredientsData.find((el) => el._id === item);
    if (current) {
      res.push(current.image_mobile);
    }
  });

  return res;
}

function compareOrdersDate(a: TOrder, b: TOrder): TSortResult {
  const x = new Date(a.updatedAt).getTime();
  const y = new Date(b.updatedAt).getTime();

  if (x > y) {
    return -1;
  } else if (x < y) {
    return 1;
  } else return 0;
}
