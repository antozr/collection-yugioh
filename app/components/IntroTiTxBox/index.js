import React from "react";
import './style.scss';
const IntroTTTxBox = ({title, txt }) => {
  return (
    <>
      <div className="sect__boxTTTxt">
        <h2 className="boxTTTxt__title sect__title--2 sect__title--slice">{title}</h2>
        <p className="boxTTTxt__txt">
         {txt}
        </p>
      </div>
    </>
  );
};

export default IntroTTTxBox;
