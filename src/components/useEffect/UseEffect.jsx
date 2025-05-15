import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("\n\tUse effect runs with value...", count);
    return () => {
      console.log("\ncleanup runs with value...", count);
    };
  }, [count]);

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseEffect;
