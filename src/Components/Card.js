import React from 'react';
import '../style/Card.css';

// destructure props:
// props --> {src, title, description, price}
function Card({src, title, description, price}) {
    return (
        <div className='card'>
            <img src={src} alt={title} />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card