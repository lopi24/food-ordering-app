import { useEffect, useState, useContext } from "react";
import ModalContext from "../../store/modal/modal-context";
import FilterMeal from "./FilterMeal";
import classes from "./Meals.module.css";
import MealItem from "./MealItem";
import CartButton from "../Layout/CartButton";
import Cart from "../Cart/Cart";

const Meals = () => {
  const modalCtx = useContext(ModalContext);

  const [meals, setMeals] = useState([]);
  const [filteredOption, setFilteredOption] = useState("all");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://react-http-41d46-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      // check if there's an error
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      // console.log(data);

      const loadedData = [];
      // for in loop making the object into an array so that we can processed it and mapped through component.
      for (const key in data) {
        // console.log(filteredOption);
        if (filteredOption === "all") {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
            image: data[key].image,
            type: data[key].type,
          });
        }
        if (data[key].type === filteredOption) {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
            image: data[key].image,
            type: data[key].type,
          });
        }
      }
      setMeals(loadedData);
    };
    getData();
  }, [filteredOption]);
  // console.log(meals);

  // filter function
  const filterHandler = (filterValue) => {
    // console.log(filterValue);
    setFilteredOption(filterValue);
  };

  // the data now has been converted into an array. array is easier to manipulate.
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      type={meal.type}
    />
  ));

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        {modalCtx.isShowing && <Cart />}
        {/* meal item detail form logic */}
        <FilterMeal filterHandler={filterHandler} />
        {/* here you will put the cartbutton */}
        <CartButton />
      </div>
      <ul>{mealsList}</ul>
    </div>
  );
};

export default Meals;
