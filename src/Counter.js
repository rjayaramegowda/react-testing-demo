import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="d-flex">
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <h1> {counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
