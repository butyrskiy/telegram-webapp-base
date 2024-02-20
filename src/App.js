import Button from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <>
      <Button title="Add" disable={false} type={"add"} />
      <Button title="Remove" disable={false} type={"remove"} />
      <Button title="Checkout" disable={false} type={"checkout"} />
    </>
  );
}

export default App;
