import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const counter = useRef(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(counter.current);
    counter.current = counter.current + 1;
  });

  const handleClick = () => {
    setNumber(number + 1);  
  };

  return (
    <div className="App">
      <h1>{`This component is rendered ${counter.current} times`}</h1>
      <button onClick={handleClick}> Increase Number</button>
      <br /> <br />
      {number}
    </div>
  );
}

export default App;
