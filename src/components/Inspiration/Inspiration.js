import React from 'react';
import classes from './Inspiration.module.css';
import Card from '../Card/Card';
import assets from '../../utils/assets';

const Inspiration = () => {
  const classNames = [classes.inspiration, 'has-content-margin'].join(' ');
  return (
    <div className={classNames}>
    <div> <h1>Inspiration for your next adventure</h1></div>
     <div className={classes.wrapper}>
     {assets.imgList.map((src, index) => <Card key={index} src={src} alt="alt text" />)}

     </div>
   
    </div>
  )
}

export default Inspiration
