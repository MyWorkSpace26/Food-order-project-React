import clases from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect, useCallback } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-a5d84-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (var mealkey in data) {
        loadedMeals.push({
          id: mealkey,
          name: data[mealkey].name,
          description: data[mealkey].description,
          price: data[mealkey].price,
        });
      }
      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealslist = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  let content = <p>Found no meals.</p>;

  if (isLoading) {
    content = <p className={clases.MealsLoading}>Loading...</p>;
  }

  if (error) {
    content = <p className={clases["MealsError"]}>{error}</p>;
  }

  if (meals.length > 0) {
    content = mealslist;
  }

  return (
    <section className={clases.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
