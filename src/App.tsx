import "./App.scss";
import Counter from "./components/Counter";

//Store

interface CounterState {
  value: number;
}

interface UserState {
  isSignedIn: boolean;
}

//Actions

const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

function App() {
  return (
    <div>
      <h1>Redux Complete Tutorial</h1>
      <Counter />
    </div>
  );
}

export default App;
