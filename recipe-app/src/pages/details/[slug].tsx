import { useEffect, useState } from "react";
import { Recipe } from "../api/recipes";
import RecipeDetails from "@/app/components/recipeDetails";
import { useRouter } from "next/router";

export default function Overview() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/recipes?slug=" + router.query.slug)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [router.query.slug]);

  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <h1>Recipe details</h1>
      {recipe && <RecipeDetails {...recipe} />}
    </div>
  );
}
