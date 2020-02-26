import React, { useState, useEffect } from "react";

function BlackKey(props) {
  const [state, setState] = useState("0");
  const [playCount, setPlayCount] = useState(1);

  function keyClick() {
    setState("30px");
  }

  function keyOnMouseUp() {
    setState("0");
  }

  function increasePlayCount() {
    let current = playCount;
    setPlayCount(current + 1);
  }

  function resetPlayCount() {
    setPlayCount(1);
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

  let playURL = props.playURL;
  //"http://localhost:3000/shortmeow.mp3"

  let playMeow = useAudio(`${playURL}`);
  let playMeow2 = useAudio(`${playURL}`);
  let playMeow3 = useAudio(`${playURL}`);
  let playMeow4 = useAudio(`${playURL}`);
  let playMeow5 = useAudio(`${playURL}`);

  return (
    <div
      className="keyContainer"
      onMouseDown={function() {
        keyClick();
        if (playCount === 1) {
          playMeow();
          increasePlayCount();
        } else if (playCount === 2) {
          playMeow2();
          increasePlayCount();
        } else if (playCount === 3) {
          playMeow3();
          increasePlayCount();
        } else if (playCount === 4) {
          playMeow4();
          increasePlayCount();
        } else if (playCount === 5) {
          playMeow5();
          resetPlayCount();
        }
      }}
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
