import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = ({ food, onAdd, onRemove }) => {
  const { title, price, image, id } = food;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    onRemove(food);
  };

  return (
    <div className={styles.card}>
      <span
        className={count !== 0 ? styles.card__badge : styles.card__badge_hidden}
      >
        {count}
      </span>
      <div className={styles.image__container}>
        <img src={image} alt={title} />
      </div>
      <h4 className={styles.card__title}>
        {title} . <span className={styles.card__price}>$ {price}</span>
      </h4>
      <div className={styles.btn__container}>
        <Button title="+" type="add" onClick={handleIncrement} />
        {count !== 0 && (
          <Button title="-" type="remove" onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
};

export default Card;
