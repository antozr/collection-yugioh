import Link from "next/link";

import React from "react";
import './style.scss';

const BoxIntro = ({ title1, txt1, link1, src1, link2, src2,srcImg }) => {
  return (
    <div className="boxIntro">
      <img
        src={srcImg}
        alt="Voici une représentation de collection de carte Yu Gi Oh."
        className="boxIntro__img"
        loading="lazy"
      />
      <div className="boxIntro__box">
        <h1 className="sect__title">{title1}</h1>
        <p className="sect__txt">{txt1}</p>
        <ul className="boxIntro__list">
          <li className="boxIntro__el">
            <Link href={src1} className="boxIntro__link">
              {link1}
            </Link>
          </li>
          <li className="boxIntro__el">
            <Link href={src2} className="boxIntro__link">
              {link2}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxIntro;
