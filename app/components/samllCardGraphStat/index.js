import React from "react";
import BoxSmallInfo3p from "../atom/BoxSmallInfo3P";

function smallGraphStat({ nbCartes, pourcentCarte, typeCarte, bigCard }) {
  return (
    <>
      {bigCard ? (
        <>
          <div className="graph__boxContent graph__boxContent--bigCard">
           <div className="graph__firstBigGraph">
           <div className="graph__boxGraph">
              <svg className="graph__CountRond">
                <circle cx="60px" cy="60px" r="60px"></circle>
              </svg>
              <p className="sect__txt graph__nameGraph sect__title--slice">P</p>
            </div>
            <div className="graph__boxTxt graph__boxTxt--margeTop">
              <p className="sect__txt graph__txtBox" title="nbCard">
                {nbCartes} {nbCartes > 1 ? "cartes" : "carte"}
              </p>
              <h3 className="sect__title sect__title--2" title="pourcentage">
                {pourcentCarte}%
              </h3>
          
            </div>
           </div>
          
           <BoxSmallInfo3p txt1={"Ton solde à fait"} txt2={"+12.5%"} txt3={"cette semaine"} styleAnnexe={{margin: "35px 0 0 0"}}/>
           <BoxSmallInfo3p txt1={"Ton solde à fait"} txt2={"+160%"}  styleAnnexe={{margin: "18px 0 0 0"}}/>
           <BoxSmallInfo3p txt1={"depuis le début"} txt2={"+35.6€"}  styleAnnexe={{margin: "0px 0 0 0"}}/>
          </div>
        </>
      ) : (
        <>
          <div className="graph__boxContent">
            <div className="graph__boxGraph">
              <svg className="graph__CountRond graph__CountRond--small">
                <circle cx="30px" cy="30px" r="30px"></circle>
              </svg>
              <p className="sect__txt graph__nameGraph graph__nameGraph--small sect__title--slice">
                T
              </p>
            </div>
            <div className="graph__boxTxt">
              <p className="sect__txt graph__txtBox" title="nbCard">
                {nbCartes} {nbCartes > 1 ? "cartes" : "carte"}
              </p>
              <h3 className="sect__title sect__title--2" title="pourcentage">
                {pourcentCarte}%
              </h3>
              <p className="sect__txt graph__txtBox" title="nbCard">
                Cartes {typeCarte}
              </p>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default smallGraphStat;
