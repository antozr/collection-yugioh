import React from 'react'
import '../../CardEl1Small/style.scss';

const RowCardInfoI = ({titleCard, idCard, typeCard, frameType, numero, level, prixMkt,nbCardCol, infoCard}) => {
  return (
    <>
      <div className={infoCard ? "card__containerCentral card__containerCentral--cardInfo" : "card__containerCentral"}>
          <div className={infoCard ? "card__boxImg card__boxImg--round" : "card__boxImg"}>
            <img
              src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg"
              alt="Image of a yugi oh card "
              className="card__img"
            />
          </div>
          <div  className={infoCard ? "card__boxInfos card__boxInfos--round" : "card__boxInfos"}>
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
                <span className="sect__txt--bold">{prixMkt == NaN ? "?" : prixMkt * nbCardCol}</span>
              </p>
              <p className="sect__txt sect__txt--light">
                En collection :{" "}
                <span className="sect__txt--bold">{nbCardCol}</span>
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default RowCardInfoI