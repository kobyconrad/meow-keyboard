import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import WhiteKey from "../components/whiteKey";
import BlackKey from "../components/blackKey";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { isInProduction } from "../components/isInDev";

const url = isInProduction()
  ? "http://localhost:3000"
  : "https://meow-keyboard.now.sh";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="keyboardContainer">
        <WhiteKey playURL={url + "/meowc0.mp3"} />
        <BlackKey translateX="-15px" playURL={url + "/meowcsharp0.mp3"} />
        <WhiteKey translateX="-30px" playURL={url + "/meowd0.mp3"} />
        <BlackKey translateX="-45px" playURL={url + "/meowdsharp0.mp3"} />
        <WhiteKey translateX="-60px" playURL={url + "/meowe0.mp3"} />
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
  <RoomServiceProvider authUrl={url + "/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
