import Link from "next/link";
import React from "react";
import './style.scss';

const ButtonStyle = ({nameBtn, link, show1}) => {
  return (
    <>
      {/* <div className="buttonS__box">
        <Link
          href={"#"}
          aria-label="Il va vous rediriger"
          className="buttonS__btn"
        >
          Ajoute en +
        </Link>
      </div>
      <div className="buttonS__boxD">
        <div className="buttonS__box buttonS__box--black">
          <Link
            href={"#"}
            aria-label="Il va vous rediriger"
            className="buttonS__btn"
          >
            Ajoute en +
          </Link>
        </div>
      </div> */}
      {show1? <> <div className="buttonS__box">
        <Link
          href={{link}}
          aria-label="Il va vous rediriger"
          className="buttonS__btn"
        >
         {nameBtn}
        </Link>
      </div></> : <> <div className="buttonS__boxD">
        <div className="buttonS__box buttonS__box--black">
          <Link
            href={{link}}
            aria-label="Il va vous rediriger"
            className="buttonS__btn"
          >
            {nameBtn}
          </Link>
        </div>
      </div> </>}
    </>
  );
};

export default ButtonStyle;
