"use client";
import { useEffect, useState } from "react";
import IntroBox from "./components/BoxIntro/index";
import BigCardInfosPop from "./components/CardBigInfos";
import CardElSmall from "./components/CardEl1Small";
import IntroTTTxBox from "./components/IntroTiTxBox";
import BoxSelectorInventaire from "./components/atom/BoxInventaireSelector";
import CardBoxTitle1 from "./components/atom/CardBoxTitle1";
import SmallCardCount from "./components/atom/SmallCountCard";
import ButtonStyle from "./components/atom/bouttonStyle";
import SmallGraphStat from "./components/samllCardGraphStat";

export default function Home() {
  const [nbCardInventaire, setNbCardInventaire] = useState(0);
  let nbCardView = 4;

  return (
    <>
      <IntroBox
        title1={"Bien le bonjour "}
        txt1={
          <>
            Bienvenus dans ton gestionnaire de carte. Tu vas avoir un aperçu en
            un rien de temps de ta collection.{" "}
          </>
        }
        link1={<>Ajouter des cartes</>}
        link2={<>Voir ta collection</>}
        srcImg={
          "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        src1={"#"}
        src2={"#"}
      />

      <section className="sect__endCardHome">
        <IntroTTTxBox
          title={"Tes  dernieres  cartes"}
          txt={
            "Voici les dernières cartes que tu as rajoutés à ta collection. "
          }
        />
        {/* <BoxSelectorInventaire show1={false} /> */}
        <div className="endCardHome__rowInfo">
          <SmallCardCount />
          <ButtonStyle show1={true} nameBtn={"Ajoute en +"} link={"#"} />
        </div>
        <div className="sect__rowCardList">
          <CardElSmall />
          <CardElSmall />
          <CardElSmall />
          <CardElSmall />
        </div>
      </section>
      <section className="sect__statHome">
        <IntroTTTxBox
          title={"Tes  cartes  en  chiffre"}
          txt={
            "Voici quelques infos rapides sur ta collection, dont le nombre, les types et autres infos pratique.  "
          }
        />

        <div className="">
          <svg className="graph__CountRond">
            <circle cx="60px" cy="60px" r="60px"></circle>
          </svg>
        </div>
        <div className="sect__graphP">
        <SmallGraphStat bigCard={true} nbCartes={"40"} pourcentCarte={80} typeCarte={"Magies"} />
          <div className="graph__smallCardBox">
          <SmallGraphStat nbCartes={"40"} pourcentCarte={80} typeCarte={"Magies"} />
          <h2 className="sect__title sect__title--2">
            Ta collection
          </h2>
          <SmallGraphStat nbCartes={"40"} pourcentCarte={80} typeCarte={"Magies"} />
          <ButtonStyle nameBtn={"En savoir +"}  />
          </div>
        </div>
      </section>
    </>
  );
}
