import classNames from "classnames";
import React from "react";
// import { BsSun } from "react-icons/bs"

// assets
import "../../assets/styles/components/weather-card.scss";

function WeatherCard({title, temperature, icon, className, color="blue", fullWidth, hide }) {
  const cardClassNames = classNames(
    "weather-card",
    `weather-card_color-${color}`,
    className,
    {
      "weather-card_full-width": fullWidth,  // додаємо і забираємо клас при зміненні widht
    },
  );
  if (hide) {
  return null;
  }

  console.log(cardClassNames);
  // or function WeatherCard({title, temperature, icon}) {

 return (
  <div className={cardClassNames}>
   <p className="weather-card__title">
    { title }
   </p>
   <div className="weather-card__info">
    <span className="weather-card__info__temperature">
    { temperature }
    </span>
    <span className="weather-card__info__icon">
      { icon }
    </span>
   </div>
  </div>
 );
}
export default WeatherCard;