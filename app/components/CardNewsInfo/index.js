import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import BigNewsCardModal from '../BigInfoCardModal';

const CardInfoNews = ({imgUrl, title, txt, link}) => {

  const [showModal, setShaowModal]= useState(false);

  return (
    <>
    <div className="newsBlog__card">
            <img
              src="https://images.ygoprodeck.com/images/cards/1861630.jpg"
              alt="This is an image of représentation to the article"
              className="newsBlog__img"
            />
            <h3 className="sect__txt sect__txt--21 sect__txt--light">The end of a area!</h3>
            <div className="newsBlog__bocTxt">
              <p className="sect__txt sect__txt--light">
                You'll find out in thirty years. No, Doc. Pretty Mediocre
                photographic fakery, they cut off your brother's hair. No no.
                Lorraine, Lorraine, what are you doing? 
                <br/>
                Right, gimme a Pepsi
                free. Alright, good-bye Einy. Oh, watch that re-entry, it's a
                little bumpy. Hey Dad, George, hey, you on the bike. Now which
                one was it, Greg or Craig? I will. Oh yes sir.
              </p>
            </div>

            <button className="newsBlog__buttonSM" onClick={()=> setShaowModal(true)}>
              <p className="sect__txt">
                <i>Lire plus +</i>
              </p>
            </button>
          </div>

          {showModal && createPortal(
    <BigNewsCardModal onClose={()=> setShaowModal(false)} imgUrl={imgUrl} title={title} contenutTxt={txt}/>, document.body
   )}
    </>
  )
}

export default CardInfoNews