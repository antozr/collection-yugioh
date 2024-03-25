import React from 'react'
import './style.scss'

const CardBoxTitle1 = ({title1}) => {
  return (
    <>
    <div className="card__boxTitle">
        <h2 className="sect__title sect__title--slice sect__title--2">
            {title1}
        </h2>
    </div>
    </>
  )
}

export default CardBoxTitle1