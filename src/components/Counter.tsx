import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="container h-100">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <h2>Count = {count}</h2>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success my-1"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-warning my-1"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="btn btn-info my-1"
        >
          Incre By 10
        </button>

        <button
          onClick={() => dispatch(incrementAsync(10))}
          className="btn btn-primary my-1"
        >
          Inc Asyn 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
