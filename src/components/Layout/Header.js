import React from "react";
import mealsImage from "../../assets/meals.jpg";

import clases from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={clases.header}>
        <h1>Restaurant Meals</h1>
        {/* button will open the cart */}
        <button>Cart</button>
      </header>
      <div className={clases["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
