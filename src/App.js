import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import "./App.css";

import getData from "./db/db";
import { useState } from "react";

// const { getData } = require("./db/db");

const foods = getData();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => {
          return x.id === food.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : x;
        })
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <h1 className="heading">Order food</h1>
      <Cart cartItems={cartItems} />
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
