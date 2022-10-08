import React from 'react'
import {Link} from"react-router-dom"


const CardItem = ({path,label,src,text}) => {
  return (
    <>
      <div className='cards__item'>
        <Link className='cards__item__link' to={path}>
            <div className="cards__item__pic-wrap" data-category={label} >
                <img src={src} alt="Travel img" className="cards__item__img" />
            </div>
            <div className="cards__item__info">
                <h5 className='cards__item__text'>{text}</h5>
            </div>
         </Link>
      </div>
    </>
  )
}

export default CardItem
