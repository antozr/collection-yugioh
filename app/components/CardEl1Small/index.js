import React from 'react'
import CardBoxTitle1 from '../atom/CardBoxTitle1'
import './style.scss'
import BoxSelectorInventaire from '../atom/BoxInventaireSelector'

const CardElSmall = () => {
  return (
   <>
   
   <div className="card">
<CardBoxTitle1 title1={"Dragon blanc aux yeux bleus"} />
< div className="card__containerCentral">
    <div className="card__boxImg"><img src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg" alt="Image of a yugi oh card " className="card__img" /></div>
    <div className="card__boxInfos">
        <h3 className="sect__title--3 card__title3">
        Dragon blanc aux yeux bleus
        </h3>
        <div className="card__groupeInfos">
            <p className="sect__txt sect__txt--light">
                dragon
            </p>
            <p className="sect__txt sect__txt--light">
               type
            </p>
            
        </div>
        <div className="card__groupeInfos">
            <p className="sect__txt sect__txt--light">
                dragon
            </p>
            <p className="sect__txt sect__txt--light">
                Niveaux : <span className='sect__txt--bold'>8</span>
            </p>
            
        </div>
        <div className="card__groupeInfos">
        
            <p className="sect__txt sect__txt--light">
                CMKT : <span className='sect__txt--bold'>8</span>
            </p>
            <p className="sect__txt sect__txt--light">
                Total : <span className='sect__txt--bold'>8</span>
            </p>
            <p className="sect__txt sect__txt--light">
                En collection : <span className='sect__txt--bold'>8</span>
            </p>
        </div>
    </div>
</div>

<BoxSelectorInventaire show1={true} />
   </div>

   </>
  )
}

export default CardElSmall