export type TIngredient = {
  readonly __v: number;
  readonly _id: string;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: "bun" | "main" | "sauce";
};

export type TOrder = {
  readonly _id: string;
  readonly createdAt: string;
  readonly ingredients: Array<string>;
  readonly name: string;
  readonly number: number;
  readonly status: "created" | "pending" | "done" | "cancelled";
  readonly updatedAt: string;
}
