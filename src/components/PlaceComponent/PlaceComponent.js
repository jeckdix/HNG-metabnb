import React from 'react';
import Card from '../Card/Card';
import allImages from '../../utils/assets';

const PlaceComponent = () => {
  const classNames = ["classes.place", 'has-content-margin'].join(' ');
  return (
    <div className={classNames}>
      {allImages.PlaceToStayImgs.map((src, index) => <Card key={index} src={src} alt="alt text" />)}
    </div>
  )
}

export default PlaceComponent
