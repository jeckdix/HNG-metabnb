import React from 'react'
import assets from '../../utils/assets';
import classes from './About.module.css'


const About = () => {

  const classNames = [classes["about-container"],].join(" ")
  return (
    <div className={classNames} style={{background: "linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%)"}} >
      <div className={classes.leftSide} style={{color: "#ffffff"}}>
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
