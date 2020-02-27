import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerText">Made with ♡ in SF.</div>
      <div>Powered by Room Service.</div>
      <style jsx>{`
        .footerContainer {
          background-color: #444;
          height: 100%;
          min-height: 60px;
          padding: 10px;
          color: #f1f1f1;
        }
        .footerText {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
