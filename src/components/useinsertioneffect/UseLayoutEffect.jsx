import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const UseLayoutEffect = () => {
  const effectDiv = useRef(null);
  const layoutDiv = useRef(null);
  const [effectClick, setEffectClick] = useState(3);
  const [click, setclick] = useState(3);

  useEffect(() => {
    console.log("first use Effect runs");
  }, []);

  useEffect(() => {
    console.log("second useEffect runs", effectDiv);
    if (effectDiv.current) {
      effectDiv.current.style.transform = `translateX(${effectClick * 100}px)`;
    }
  }, [effectClick]);

  useLayoutEffect(() => {
    console.log("use Layout effect is defined in last but runs first");
    if (layoutDiv.current) {
      layoutDiv.current.style.transform = `translateX(${click * 100}px)`;
    }
  }, [click]);

  useInsertionEffect(() => {
    console.log("It runs before useLayout Effect");
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    // If we try to set values of state it gives warning
  }, []);

  function handleReload() {
    window.location.replace(window.location.href);
    window.location.reload(true);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "max-Content",
        }}
      >
        <h1>UseEffect</h1>
        <div
          style={{
            height: "100px",
            width: "100px",
            transition: "3s ease-in",
            backgroundColor: "red",
          }}
          ref={effectDiv}
        ></div>
      </div>
      <div>
        <h1>useLayoutEffect</h1>
        <div
          style={{
            height: "100px",
            width: "100px",
            transition: "3s ease-in",
            backgroundColor: "green",
          }}
          ref={layoutDiv}
        ></div>
      </div>
      <button onClick={handleReload}> Reload </button>
    </>
  );
};

export default UseLayoutEffect;
