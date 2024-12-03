export interface RecipeDetail {
  title: string;
  creationDate: string;
  cookingInstructions: string;
  vegetarian: boolean;
  servings: number;
  ingredients: {
    name: string;
    quantity: string;
  }[];
}
