import classes from "./FilterMeal.module.css";

const FilterMeal = (props) => {
  const onFilterValueChanged = (e) => {
    // console.log(e.target.value);
    props.filterHandler(e.target.value);
  };
  return (
    <>
      <select
        className={classes.select}
        name="filter"
        onChange={onFilterValueChanged}
      >
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="dessert">Dessert</option>
        <option value="breakfast">Breakfast</option>
        <option value="fish">Fish</option>
      </select>
    </>
  );
};

export default FilterMeal;
