"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import CardBoxTitle1 from "../atom/CardBoxTitle1";
import RowCardInfoI from "../atom/RowCardIInfo";
import BoxSelectorInventaire from "../atom/BoxInventaireSelector";

const BigCardInfosPop = ({
  titleCard,
  idCard,
  typeCard,
  frameType,
  numero,
  level,
  prixMkt,
  
}) => {

    const [nbCardCol, setNbCardCol] = useState(0);
      /// gestion for the base "data local.storage nb card"
  const dataBoxInventaire = (data) => {
    setNbCardCol(data);
  };
  useEffect(()=>{
    setNbCardCol(localStorage.getItem('card1nb'));// changer pour la réactive par props
  })
  return (
    <>
      <div className="cardInfoBig">
        <button className="cardInfoBig__btnClose ">X</button>
        <CardBoxTitle1 title1={"hello"} />

        <RowCardInfoI infoCard={true}/>

        <div className="cardInfoBig__boxDes">
            <p className="sect__txt boxDes__txt--thin">
            "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.
            </p>
           <div className="boxDes">
            <ul className="boxDes__list">
                <li className="boxDes__el">
                    <p className="sect__txt boxDes__txt">
                        <span className="boxDes__txt--thin" id="atkDes">000</span> atk
                    </p>
                </li>
                <li className="boxDes__el">
                    <p className="sect__txt boxDes__txt">
                    <span className="boxDes__txt--thin" id="defDes">000</span> def
                    </p>
                </li>
            </ul>
            <p className="boxDes__ttDecor">
                Description
            </p>
           </div>
        </div>

        <div className="cardInfoBig__rowInv">
            <div className="cardInfoBig__boxImg"><img src="https://images.ygoprodeck.com/images/cards_cropped/6983839.jpg" alt="" className="cardInfoBig__img" /></div>
            <BoxSelectorInventaire show1={false}   idCard={"card1"}
          UpNb={dataBoxInventaire}/>
        </div>
      </div>
    </>
  );
};

export default BigCardInfosPop;
