import React from 'react'
import "./styles.scss"
import BoxIntro from '../components/BoxIntro'
import IntroTTTxBox from '../components/IntroTiTxBox'
import SmallGraphStat from "../components/samllCardGraphStat";
import ButtonStyle from '../components/atom/bouttonStyle';

const profil = () => {
  return (
    <>
    <BoxIntro
        title1={"Bonjour X."}
        srcImg={
          "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        showButton={false}
        styleCustom={{height: "30vh"}}

      />
      <section className="profile__statSect">
      <IntroTTTxBox
          title={"Ta collection en chiffre"}
         
        />
            <div className="sect__graphP profile__statBox">
          <SmallGraphStat
            bigCard={true}
            nbCartes={"40"}
            pourcentCarte={80}
            typeCarte={"Magies"}
          />
          <div className="graph__smallCardBox">
            <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
            <h2 className="sect__title sect__title--2">Ton TCG</h2>
            <SmallGraphStat
              nbCartes={"40"}
              pourcentCarte={80}
              typeCarte={"Magies"}
            />
            <ButtonStyle nameBtn={"En savoir +"} />
          </div>
        </div>
      </section>


      <section className="profile__setting">
      <IntroTTTxBox
          title={"Modifie tes informations"}
         
        />
        <div className="profile__boxSettings">
            <ul className="settings__list">
                <li className="settings__el">
                    <h3 className="sect__title sect__title--3">
                        Ton pseudo : 
                    </h3>
                    <div className="settings__boxInput">
                        <p className="sect__txt">
                           Hugue
                        </p>
                        <button className="settings__button">
                            modifier
                        </button>
                    </div>
                </li>
                <li className="settings__el">
                    <h3 className="sect__title sect__title--3">
                        Ton email : 
                    </h3>
                    <div className="settings__boxInput">
                        <p className="sect__txt">
                            yugioh@gmail.com
                        </p>
                        <button className="settings__button">
                            modifier
                        </button>
                    </div>
                </li>
                <li className="settings__el">
                    <h3 className="sect__title sect__title--3">
                        Ton mot de passe : 
                    </h3>
                    <div className="settings__boxInput">
                        <p className="sect__txt">
                            *******************
                        </p>
                        <button className="settings__button">
                            modifier
                        </button>
                    </div>
                </li>
            </ul>
            <button className="settings__btnDeco">
                Se déconnecter
            </button>
        </div>
      </section>
    </>
  )
}

export default profil