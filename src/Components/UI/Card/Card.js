import React from 'react';
import classes from './card.module.css'

const Card = (props) => {
    const cardClass = `${classes.card } ${props.className} `
  return (
    <div className={cardClass}>
      {props.children}
    </div>
  );
}

export default Card;
