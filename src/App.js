import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmt() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="App">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <br />
      <button onClick={handleDecrementClick}>-</button>
      <br />

      <button onClick={handleResetClick}>Reset</button>
      <br />

      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Enter a number"
        value={amount}
      />
      <button onClick={handleIncAmt}>Inc</button>
    </div>
  );
}

export default App;
