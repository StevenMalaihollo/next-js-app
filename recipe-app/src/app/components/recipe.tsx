import React from "react";

interface Ingredient {
  name: string;
  quantity: string; // Example: "1 cup", "200g"
}

interface RecipeProps {
  title: string;
  creationDate: string; // ISO 8601 date string
  cookingInstructions: string;
  isVegetarian: boolean;
  servings: number;
  ingredients: Ingredient[];
}

const RecipeDetail: React.FC<RecipeProps> = ({
  title,
  creationDate,
  cookingInstructions,
  isVegetarian,
  servings,
  ingredients,
}) => {
  const formattedDate = new Date(creationDate).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <p className="text-gray-500 text-sm mt-1">Created on: {formattedDate}</p>

      <p
        className={`mt-2 text-sm ${
          isVegetarian ? "text-green-600" : "text-red-600"
        }`}
      >
        {isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
      </p>

      <p className="mt-2 text-gray-700">Servings: {servings}</p>

      <section className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Ingredients:</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity} - {ingredient.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Cooking Instructions:
        </h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line">
          {cookingInstructions}
        </p>
      </section>
    </div>
  );
};

export default RecipeDetail;
