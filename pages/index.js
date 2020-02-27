import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import WhiteKey from "../components/whiteKey";
import BlackKey from "../components/blackKey";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="keyboardContainer">
        <WhiteKey playURL={"http://localhost:3000/meowc0.mp3"} />
        <BlackKey
          translateX="-15px"
          playURL={"http://localhost:3000/meowcsharp0.mp3"}
        />
        <WhiteKey
          translateX="-30px"
          playURL={"http://localhost:3000/meowd0.mp3"}
        />
        <BlackKey
          translateX="-45px"
          playURL={"http://localhost:3000/meowdsharp0.mp3"}
        />
        <WhiteKey
          translateX="-60px"
          playURL={"http://localhost:3000/meowe0.mp3"}
        />
      </div>
      <Footer />
      <style jsx>
        {`
          .keyboardContainer {
            display: flex;
            flex-direction: row;
            background-color: #111;
            min-height: 450px;
            padding-top: 75px;
            padding-left: 20px;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #0d0d0d;
          font-family: Arial;
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
