import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";

const AvailableMeals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const meals = (
    <ul>
      {DUMMY_MEALS.map((item) => (
        <MealItem
          key={item.id}
          id={item.id}
          title={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{meals}</Card>
    </section>
  );
};

export default AvailableMeals;
