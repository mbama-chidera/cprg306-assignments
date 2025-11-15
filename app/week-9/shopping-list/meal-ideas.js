import { useEffect, useState, useCallback } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = useCallback(async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }, []);

  const loadMealIdeas = useCallback(async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  }, [ingredient, fetchMealIdeas]);

  useEffect(() => {
    loadMealIdeas();
  }, [loadMealIdeas]); // ✅ Now safe

  return (
    <div className="p-4 bg-black border border-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">
        Meal Ideas for {`(${ingredient || "select an item"})`}
      </h2>

      {!ingredient && <p className="text-gray-400">Choose an item to see ideas.</p>}

      {meals.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-black border border-white rounded-md p-3">
              <span className="text-white">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      ) : (
        ingredient && <p className="text-white mt-2">No meal found.</p>
      )}
    </div>
  );
}
