import React, { useState } from "react";
import { NextPage } from "next/types";

const ExamplePage: NextPage = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increase Count</button>
    </div>
  );
};

export default ExamplePage;
