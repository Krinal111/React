import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const obj = { name: "krinal", rno: 1 };
  /*
Function reference every time diffrence so if i pass as props child component re render every time. Using useCallback It will memoize the function
now passing function as props  won't cause re-render.
*/

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

 
  /*
  
  If I pass Object as props then it also cause re-render. because object are compared by its reference so It will diffrent every time so it will cause re-render for child component.Using useMemo we can memoize it.

  */

  const sendCountObj = useMemo(() => {
    return obj;
  }, []);

  return (
    <div>
      <h1>ParentComponent</h1>
      <p>Count:{count}</p>

      <ChildComponent handleClick={handleClick} dataObj={sendCountObj} />
    </div>
  );
};

export default ParentComponent;
