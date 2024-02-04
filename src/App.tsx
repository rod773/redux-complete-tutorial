import "./App.scss";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center  vh-100">
      <h1 className="my-40">Redux Complete Tutorial</h1>
      <Counter />
    </div>
  );
}

export default App;
