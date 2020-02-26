import React, { useState, useEffect } from "react";

function WhiteKey(props) {
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

  let playMeow = useAudio("http://localhost:3000/shortmeow.mp3");
  let playMeow2 = useAudio("http://localhost:3000/shortmeow.mp3");
  let playMeow3 = useAudio("http://localhost:3000/shortmeow.mp3");
  let playMeow4 = useAudio("http://localhost:3000/shortmeow.mp3");
  let playMeow5 = useAudio("http://localhost:3000/shortmeow.mp3");

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
        console.log(playCount);
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
