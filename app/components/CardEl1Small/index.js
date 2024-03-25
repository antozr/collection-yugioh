"use client";

import React, { useEffect, useState } from "react";
import CardBoxTitle1 from "../atom/CardBoxTitle1";
import "./style.scss";
import BoxSelectorInventaire from "../atom/BoxInventaireSelector";

const CardElSmall = ({
  titleCard,
  typeCard,
  frameType,
  numero,
  level,
  prixMkt,
  nbCard,
}) => {
  const [nbCardCol, setNbCardCol] = useState(0);
  const [idCard, setIdCard] = useState("");



  ///function create id for the card
var check22 = false;

  if (idCard == "") {
    let caracteresPossibles =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    function genererNombreAleatoireUnique(min, max) {
      let nombreAleatoire;
      do {
        nombreAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (nombreAleatoireDejaUtilise[nombreAleatoire]);
      nombreAleatoireDejaUtilise[nombreAleatoire] = true;
      return nombreAleatoire;
    }
    let idCardAl = "";
    const nombreAleatoireDejaUtilise = new Array(
      caracteresPossibles.length
    ).fill(false);
    for (let i = 0; i < 12; i++) {
      const indiceAleatoire = genererNombreAleatoireUnique(
        0,
        caracteresPossibles.length - 1
      );
      idCardAl += caracteresPossibles[indiceAleatoire];
    }

    setIdCard(idCardAl);

  }else{

  }

  ///

  /// gestion for the base "data local.storage nb card"
  const dataBoxInventaire = (data) => {
    setNbCardCol(data);
  };
  useEffect(()=>{
    setNbCardCol(localStorage.getItem('card1nb'));// changer pour la réactive par props
  })
  ///

  return (
    <>
      <div className="card" key={"card1"} id={idCard}>
        <CardBoxTitle1 title1={titleCard} />
        <div className="card__containerCentral">
          <div className="card__boxImg">
            <img
              src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg"
              alt="Image of a yugi oh card "
              className="card__img"
            />
          </div>
          <div className="card__boxInfos">
            <h3 className="sect__title--3 card__title3">
              {titleCard} {idCard}
            </h3>
            <div className="card__groupeInfos">
              <p className="sect__txt sect__txt--light">{typeCard}</p>
              <p className="sect__txt sect__txt--light">{frameType}</p>
            </div>
            <div className="card__groupeInfos">
              <p className="sect__txt sect__txt--light">{numero}</p>
              <p className="sect__txt sect__txt--light">
                Niveaux : <span className="sect__txt--bold"> {level} </span>
              </p>
            </div>
            <div className="card__groupeInfos">
              <p className="sect__txt sect__txt--light">
                CMKT : <span className="sect__txt--bold">{prixMkt}</span>
              </p>
              <p className="sect__txt sect__txt--light">
                Total :{" "}
                <span className="sect__txt--bold">{prixMkt * nbCardCol}</span>
              </p>
              <p className="sect__txt sect__txt--light">
                En collection :{" "}
                <span className="sect__txt--bold">{nbCardCol}</span>
              </p>
            </div>
          </div>
        </div>

        <BoxSelectorInventaire
          show1={true}
          idCard={"card1"}
          UpNb={dataBoxInventaire}
        />
      </div>
    </>
  );
};

export default CardElSmall;
