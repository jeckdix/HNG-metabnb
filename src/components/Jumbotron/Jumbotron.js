import React from 'react';
import classes from './Jumbotron.module.css';
import assets from '../../utils/assets';

const Jumbotron = () => {
  const classNames = [classes.jumbotron, 'has-content-margin'].join(' ');

  return (
    <div className={classNames}>
      <div className="text-and-search">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
        </h1>
        <p>
          We provide you access to luxury and affordable houses in the metaverse, get a chance
          to turn your imagination to reality at your comfort zone
        </p>
        <div className={classes.search}>
              <input type="text" placeholder="Search for location" />
              <button>Search</button>
        </div>
      </div>
      <div className="image">
        <img className='' src={assets.frontPageImg} alt="front page" />
      </div>
    </div>
  )
}


export default Jumbotron
