import React from "react";
import "./style.scss"; 
import BoxIntro from "../components/BoxIntro";
import IntroTTTxBox from "../components/IntroTiTxBox";
import CardElSmall from "../components/CardEl1Small";
import SmallGraphStat from "../components/samllCardGraphStat";



const collection = () => {
  return (
    <>
      <BoxIntro
        title1={"Ta Collection"}
        txt1={
          <>
            Bien le bonjour, tu as 60 cartes dans ton inventaire. Mais tu peux
            en savoir plus sur elle si tu le souhaite.{" "}
          </>
        }
        link1={<>Ajouter des cartes</>}
        link2={<>Voir tes stats</>}
        srcImg={
          "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        src1={"#"}
        src2={"#stats"}
      />

<section className="sect__endCardHome">
        <IntroTTTxBox
          title={"Tes  dernieres  cartes"}
          txt={
            "Voici les dernières cartes que tu as rajoutés à ta collection. "
          }
        />
        {/* <BoxSelectorInventaire show1={false} /> */}
        <div className="sect__rowCardList">
          <CardElSmall />
          <CardElSmall />
          <CardElSmall />
          <CardElSmall />
        </div>
      </section>
      

      <section className="collection__statSect">
      <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
             <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />

      </section>
    </>
  );
};

export default collection;
