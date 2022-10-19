import React from 'react';
import Card from '../../UI/Card/Card';
import MealItem from './MeanItem/MealItem';
import classes from './AvailableMeal.module.css'



const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Fried Rice',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Pounded yam',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Jollof Rice',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Amala',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];








const AvailableMeal = () => {
 
    const mealList = DUMMY_MEALS.map((meals)=>(
        <MealItem 
        id = {meals.id}
        key = {meals.id}
        name = {meals.name}
        description = {meals.description}
        price = {meals.price}
        />

    ));

return (
  <Card className={classes.meals}>
        <ul>
        {mealList}
        </ul>
  </Card>
  );
}

export default AvailableMeal;
