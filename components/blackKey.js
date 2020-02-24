import React, { useState } from "react";

function BlackKey(props) {
  const [state, setState] = useState("0");

  function keyClick() {
    setState("30px");
  }

  function keyOnMouseUp() {
    setState("0");
  }

  return (
    <div
      className="keyContainer"
      onMouseDown={keyClick}
      onMouseUp={keyOnMouseUp}
    >
      <style jsx>{`
        .keyContainer {
          width: 30px;
          height: 200px;
          margin-top: ${state};
          background-color: #444;
          box-shadow: inset 0 0 7px #444;
          border-radius: 0 0 7px 10px;
          transform: translateX(${props.translateX});
          z-index: 1;
        }
        .keyContainer:hover {
          background-color: #111;
        }
      `}</style>
    </div>
  );
}

export default BlackKey;
