import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import "./style.scss"
const BigNewsCardModal = ({onClose, imgUrl, title, contenutTxt}) => {




  return (
   <>
   <div className="modalNews">
   <button className="cardInfoBig__btnClose "  onClick={onClose} >X</button>
    <img src={imgUrl} alt="This is an représentation of the article." className="modalNews__img"  />

    <div className="modalNews__boxContent">
        <h2 className="sect__title sect__title--2">
            {title}
        </h2>
        <p className="sect__txt">
            {contenutTxt }
        </p>
    </div>

   </div>

   
   </>
  )
}

export default BigNewsCardModal