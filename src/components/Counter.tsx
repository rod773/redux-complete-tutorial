import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return <div>Counter</div>;
};

export default Counter;
