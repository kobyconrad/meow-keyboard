import React from "react";

function NavBar() {
  return (
    <div className="navContainer">
      <div className="titleText">Kitten Concert Keyboard</div>
      <div className="subTitleContainer">
        "Your&nbsp;<div className="sciText">scientists</div>&nbsp;programmers
        were so preoccupied with whether or not they could, they didn’t stop to
        think if they should."
      </div>

      <style jsx>{`
        .navContainer {
          background-color: #444;
          width: 101.9%;
          height: 100px;
          margin-bottom: 75px;
          margin-top: -9px;
          margin-right: -9px;
          margin-left: -9px;
          padding-left: 20px;
          font-family: arial;
          display: flex;
          justify-content: center;
          flex-direction: column;
          color: #f4f4f4;
        }
        .titleText {
          font-size: 24px;
          font-weight: 900;
        }
        .subTitleContainer {
          display: flex;
          flex-direction: row;
          margin-top: 5px;
        }
        .sciText {
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
}

export default NavBar;
