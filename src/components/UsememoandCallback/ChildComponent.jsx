import React from "react";

const ChildComponent = ({ handleClick, dataObj, children }) => {
  return (
    <div>
      {console.log(children)}
      <h1>ChildComponent</h1>
      <button onClick={handleClick}>Increment</button>
      {console.log("child component re-render")}
      <h1>Name:{dataObj.name}</h1>
      <h2>Roll No:{dataObj.rno}</h2>
    </div>
  );
};

// Here I used React memo because when state of parent changes then child also re-render.It cause unnecessary re-render. If I don't use memo then when count changes chil also re-render

// export default ChildComponent;

export default React.memo(ChildComponent);
