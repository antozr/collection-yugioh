import React from "react";
import "./styles.scss";

const BoxSelectorInventaire = ({show1}) => {
  return (
    <>
      {/* <div className="card__selectorNbInv">
        <ul className="selectorNbInv__list">
          <li className="selectorNbInv__el">
            <button className="selectorNbInv__btn selectorNbInv__btn--min">
              -
            </button>
          </li>
          <li className="selectorNbInv__el">
            <p className="selectorNbInv__txt">0</p>
          </li>
          <li className="selectorNbInv__el">
            <button className="selectorNbInv__btn">+</button>
          </li>
        </ul>
      </div>

      <div className="card__selectorNbInv card__selectorNbInv--small">
          <h3 className="sect__title sect__title--2  sect__title--slice selectorNbInv__title">
            Inventaire
          </h3>
          <p className="selectorNbInv__txt selectorNbInv__txt--center">0</p>
          <ul className="selectorNbInv__listBtn">
            <li className="selectorNbInv__elBtn">
              <button className="selectorNbInv__btn selectorNbInv__btn--small">
                -
              </button>
            </li>
            <li className="selectorNbInv__elBtn">
              <button className="selectorNbInv__btn selectorNbInv__btn--small">
                +
              </button>
            </li>
          </ul>
      </div> */}
      {show1? <><div className="card__selectorNbInv">
        <ul className="selectorNbInv__list">
          <li className="selectorNbInv__el">
            <button className="selectorNbInv__btn selectorNbInv__btn--min">
              -
            </button>
          </li>
          <li className="selectorNbInv__el">
            <p className="selectorNbInv__txt">0</p>
          </li>
          <li className="selectorNbInv__el">
            <button className="selectorNbInv__btn">+</button>
          </li>
        </ul>
      </div></>:<><div className="card__selectorNbInv card__selectorNbInv--small">
          <h3 className="sect__title sect__title--2  sect__title--slice selectorNbInv__title">
            Inventaire
          </h3>
          <p className="selectorNbInv__txt selectorNbInv__txt--center">0</p>
          <ul className="selectorNbInv__listBtn">
            <li className="selectorNbInv__elBtn">
              <button className="selectorNbInv__btn selectorNbInv__btn--small">
                -
              </button>
            </li>
            <li className="selectorNbInv__elBtn">
              <button className="selectorNbInv__btn selectorNbInv__btn--small">
                +
              </button>
            </li>
          </ul>
      </div></>}
    </>
  );
};

export default BoxSelectorInventaire;
