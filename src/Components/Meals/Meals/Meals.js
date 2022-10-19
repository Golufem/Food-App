import React from 'react';
// import Card from '../../UI/Card/Card';
import AvailableMeal from '../AvailableMeal/AvailableMeal';
import MealSummary from '../MealSumarry/MealSummary';
const Meals = () => {
  return (
    <React.Fragment>
           <MealSummary/>
           
            <AvailableMeal/>
            
    </React.Fragment>
  );
}

export default Meals;
