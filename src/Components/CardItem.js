import React from 'react';
import {Link} from "react-router-dom";
const CardItem = ({path,label,src,text}) => {
  return (
    <>
        <li className="cards-item">
            <Link to={path} className='cards-item-link'>
                <figure className="cards-item-pic-wrap" data-category={label}>
                    <img className="cards-item-img" src={src} alt="Travel Img" />
                </figure>
                <div className="cards-item-info">
                    <h5 className="cards-item-text">
                        {text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem