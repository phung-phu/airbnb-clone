import React from 'react';
import '../style/SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({ img, location, title, description, star, price, total }) {
    return (
        <div className='searchResult'>
            <img src={img} alt={title} />
            <FavoriteBorderIcon className='searchResult_heart' />
            <div className='searchResult_info'>
                <div className='searchResult_info_top'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div className='searchResult_info_btm'>
                    <div className='searchResult_stars'>
                        <StarIcon className='searchResult_star'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResult_price'>
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchResult