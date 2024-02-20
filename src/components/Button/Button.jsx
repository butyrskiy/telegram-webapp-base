import styles from "./Button.module.css";

const Button = ({ type, title, disable, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${
        (type === "add" && `${styles.add}`) ||
        (type === "remove" && `${styles.remove}`) ||
        (type === "checkout" && `${styles.checkout}`)
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
