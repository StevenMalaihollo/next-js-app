"use client";

import React, { useEffect, useState } from "react";
import { Recipe } from "../pages/api/recipes";
import RecipeCard from "@/app/components/recipeCard";
import Link from "next/link";

export default function Overview() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <h2>Recipes</h2>

      <div className="flex gap-x-4 ">
        {recipes.map((recipe, index) => (
          <Link
            href={`/details/${encodeURIComponent(recipe.slug)}`}
            className="flex-1"
            key={index}
          >
            <RecipeCard {...recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}
