import React, { useState, useEffect } from "react";

function WhiteKey(props) {
  const [state, setState] = useState("0");

  function keyClick() {
    setState("30px");
  }

  function keyOnMouseUp() {
    setState("0");
  }

  function useAudio(url) {
    const [aud, setAud] = useState();

    useEffect(() => {
      setAud(new Audio(url));
    }, [url]);

    function play() {
      if (aud) {
        aud.play();
      }
    }

    return play;
  }

  let playMeow = useAudio("http://localhost:3000/shortmeow.mp3");

  return (
    <div
      className="keyContainer"
      onMouseDown={function() {
        keyClick();
        playMeow();
      }}
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
          z-index: 0;
          transform: translateX(${props.translateX});
        }
        .keyContainer:hover {
          background-color: #eeeeee;
        }
      `}</style>
    </div>
  );
}

export default WhiteKey;
