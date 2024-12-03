import { Recipe } from "@/pages/api/recipes";
import React from "react";

const RecipeDetail: React.FC<Recipe> = ({
  title,
  creationDate,
  cookingInstructions,
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

      <p className="mt-2 text-gray-700">Servings: {servings}</p>

      <section className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Ingredients:</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {ingredients &&
            ingredients.map((ingredient, index) => (
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
