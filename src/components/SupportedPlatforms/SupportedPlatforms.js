import React from 'react';
import classes from './SupportedPlatforms.module.css';
import assets from '../../utils/assets';

const SupportedPlatforms = () => {
  return (
    <div className={classes["supported-platforms"]}>
        <img src={assets.mbbroken} alt="mbbroken" />
        <img src={assets.metamask} alt="metamask" />
        <img src={assets.opensea} alt="opensea" />
    </div>
  )
}

export default SupportedPlatforms
