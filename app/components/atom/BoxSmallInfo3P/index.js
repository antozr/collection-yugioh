import React from "react";
import "./styles.scss";

const BoxSmallInfo3p = ({txt1, txt2, txt3, styleAnnexe}) => {
  return (
    <>
      <div className="graph__boxTxtInfos" style={styleAnnexe}>
        <p className="sect__txt graph__txtBox" title="nbCard">
          {txt1} 
        </p>
        <p className="sect__title sect__title--2" title="pourcentage">
          {txt2}
        </p>
        {txt3 ? <><p className="sect__txt graph__txtBox" title="nbCard">
           {txt3}
        </p></> : ""}
      </div>
    </>
  );
};

export default BoxSmallInfo3p;
