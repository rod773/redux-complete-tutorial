import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { decrement, increment } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="">
      <h2>Count = {count}</h2>
      <div className="d-flex justify-content-center container">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success mx-5"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-warning mx-5"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
