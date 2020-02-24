import React, { useState } from "react";

function WhiteKey() {
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
          width: 65px;
          height: 350px;
          margin-top: ${state};
          background-color: #f7f6f7;
          box-shadow: inset 0 0 7px #444;
          border-radius: 0 0 7px 10px;
        }
        .keyContainer:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </div>
  );
}

export default WhiteKey;
