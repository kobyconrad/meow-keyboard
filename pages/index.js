import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";
import Sound from "react-sound";

const App = () => {
  const [sharedState, setSharedState] = useSharedState("my-room");

  function onClick() {
    setSharedState(prevDoc => {
      if (!prevDoc.array || !Array.isArray(prevDoc.array)) {
        prevDoc.array = [1];
      }
      prevDoc.array = prevDoc.array.concat([1]);
    });
  }

  function arrReduce() {
    setSharedState(prevDoc => {
      prevDoc.array.pop();
    });
  }
  const mappedMeows = (sharedState.array || []).map(function(item) {
    return (
      <Sound
        url="http://localhost:3000/meow.mp3"
        playStatus={"PLAYING"}
        playFromPosition={0}
        ignoreMobileRestrictions={true}
      />
    );
  });

  return (
    <div>
      <h1>Open multiple browser windows!</h1>

      <p>{sharedState.array || [1]}</p>

      <button onClick={onClick}>Increase Array</button>
      <button onClick={arrReduce}>Decrease Array</button>
      {mappedMeows}
      <Sound
        url="http://localhost:3000/meow.mp3"
        playStatus={"PLAYING"}
        playFromPosition={0}
        ignoreMobileRestrictions={true}
      />
      <Sound
        url="http://localhost:3000/meow.mp3"
        playStatus={"PLAYING"}
        playFromPosition={300}
        ignoreMobileRestrictions={true}
      />
      <Sound
        url="http://localhost:3000/meow.mp3"
        playStatus={"PLAYING"}
        playFromPosition={600}
        ignoreMobileRestrictions={true}
      />
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
