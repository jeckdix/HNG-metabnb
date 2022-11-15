import React from 'react'
import assets from '../../utils/assets';
import classes from './About.module.css'


const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes.leftSide}>
        <h1>Metabnb NFTs</h1>
        <p className={classes.aboutText}>
          Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which
          are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive
          services.
        </p>
          <a className={classes["learn-more"]} href="/">Learn more</a>
      </div>
      <div className={classes.rightSide}>
        <img src={assets.metabnbNFT} alt="metabnb NFT" />
      </div>
    </div>
  )
}

export default About
