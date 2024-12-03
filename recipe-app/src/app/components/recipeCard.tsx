import { Recipe } from "@/pages/api/recipes";
import React from "react";

const RecipeCard: React.FC<Recipe> = ({ title, creationDate }) => {
  const formattedDate = new Date(creationDate).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full min-h-40 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <p className="text-gray-500 text-sm mt-1">Created on: {formattedDate}</p>
    </div>
  );
};

export default RecipeCard;
