import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import WhiteKey from "../components/whiteKey";

const App = () => {
  const [sharedState, setSharedState] = useSharedState("my-room");

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

  let playMeow = useAudio("http://localhost:3000/meow.mp3");
  let playMeow2 = useAudio("http://localhost:3000/meow.mp3");

  let playCount = 1;

  return (
    <div>
      <h1>Open multiple browser windows!</h1>
      <div className="keyboardContainer">
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
      </div>

      <button
        onClick={function() {
          if (playCount === 1) {
            playMeow();
            playCount++;
          } else if (playCount === 2) {
            playMeow2();
            playCount++;
          }
        }}
      >
        Play Audio
      </button>
      <style jsx>{`
        .keyboardContainer {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
