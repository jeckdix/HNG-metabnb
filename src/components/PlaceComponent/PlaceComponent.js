import React from 'react';
import Card from '../Card/Card';
import allImages from '../../utils/assets';

const PlaceComponent = () => {
//   const classNames = [classes.inspiration, 'has-content-margin'].join(' ');
  return (
    <div className='has-content-margin'>
      <div>{allImages.PlaceToStayImgs.map((src, index) => <Card key={index} src={src} alt="alt text" />)}</div>
    </div>
  )
}

export default PlaceComponent
