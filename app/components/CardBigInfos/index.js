import React from "react";
import "./styles.scss";
import CardBoxTitle1 from "../atom/CardBoxTitle1";
import RowCardInfoI from "../atom/RowCardIInfo";

const BigCardInfosPop = ({
  titleCard,
  idCard,
  typeCard,
  frameType,
  numero,
  level,
  prixMkt,
  nbCardCol,
}) => {
  return (
    <>
      <div className="cardInfoBig">
        <button className="cardInfoBig__btnClose ">X</button>
        <CardBoxTitle1 title1={"hello"} />

        <RowCardInfoI infoCard={true}/>
      </div>
    </>
  );
};

export default BigCardInfosPop;
