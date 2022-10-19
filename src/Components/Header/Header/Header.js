import React from 'react';
import mealsImage from "../../../Documents/meals.jpg";
import headerStyles from './Header.module.css';
import ButonHeader from '../ButtonHeader/ButonHeader';

const Header = (props) => {
  return (
    <div>
      <div className={headerStyles.header}>
            <header> Golufem Meal</header>
            <ButonHeader onShowCarthere = {props.onShowCart}/>
      </div>
      <div className={headerStyles.image}>
      <img   src={mealsImage} alt = "food app"/>
      
      
      </div>
    </div>
  );
}

export default Header;
