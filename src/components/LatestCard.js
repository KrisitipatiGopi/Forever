import React from 'react'
import { Link } from 'react-router-dom';

const LatestCard = ({item}) => {
    const {_id,name,price} = item;
    const {image} = item;
    const image1 = image[0];
    //console.log(_id)
  return (
    <Link to={`/collections/${_id}`}><div>
        <img src={image1} alt={name} className='w-56' />
        <p className='text-xs'>{name}</p>
        <p className='text-sm font-semibold'>Rs&nbsp;{price * 85 / 10}</p>
    </div>
    </Link>
  )
}

export default LatestCard;