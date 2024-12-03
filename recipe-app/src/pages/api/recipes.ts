import { NextApiRequest, NextApiResponse } from "next";

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

const recipes: RecipeDetail[] = [
  {
    title: "Spaghetti Aglio e Olio",
    creationDate: "2024-12-03T12:00:00Z",
    cookingInstructions: `1. Cook spaghetti until al dente.
2. In a pan, heat olive oil and sauté garlic until golden.
3. Toss the spaghetti in the garlic oil and season with salt, pepper, and chili flakes.
4. Garnish with parsley and serve immediately.`,
    vegetarian: true,
    servings: 4,
    ingredients: [
      { name: "Spaghetti", quantity: "400g" },
      { name: "Olive Oil", quantity: "4 tbsp" },
      { name: "Garlic", quantity: "4 cloves, sliced" },
      { name: "Chili Flakes", quantity: "1 tsp" },
      { name: "Parsley", quantity: "2 tbsp, chopped" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
  },
  {
    title: "Vegetarian Chili",
    creationDate: "2024-11-25T15:30:00Z",
    cookingInstructions: `1. Heat oil in a large pot and sauté onions, garlic, and bell peppers.
2. Add spices (cumin, chili powder) and stir for 1 minute.
3. Stir in tomatoes, beans, and vegetable broth. Simmer for 20 minutes.
4. Garnish with cilantro and serve hot.`,
    vegetarian: true,
    servings: 6,
    ingredients: [
      { name: "Onion", quantity: "1, diced" },
      { name: "Garlic", quantity: "3 cloves, minced" },
      { name: "Bell Pepper", quantity: "2, diced" },
      { name: "Canned Tomatoes", quantity: "400g" },
      { name: "Kidney Beans", quantity: "400g" },
      { name: "Vegetable Broth", quantity: "2 cups" },
      { name: "Chili Powder", quantity: "1 tbsp" },
      { name: "Cumin", quantity: "1 tsp" },
      { name: "Salt", quantity: "To taste" },
      { name: "Cilantro", quantity: "To garnish" },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(recipes);
}
