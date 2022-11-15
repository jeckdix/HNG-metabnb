import React from "react";
import classes from "./Card.module.css";
import { AiTwotoneStar } from "react-icons/ai";

const Card = ({ src, alt}) => {
  return (
      <div className={classes["card-container"]}>

        <div className={classes['image-container']}>
          <img src={src} alt={alt} />
        </div>

        <div className={classes["card-info"]}>

          <div className={classes["card-text"]}>
            <p>
              <span>Desert king</span>
              <span>2345km away</span>
              <span className={classes.star}>
                <AiTwotoneStar size="15" /> <AiTwotoneStar size="15" />
                <AiTwotoneStar size="15" />
                <AiTwotoneStar size="15" />
                <AiTwotoneStar size="15" />
              </span>
            </p>
          </div>

          <div className={classes["card-text"]}>
            <p>
              <span className={classes.price}>1MBT per night</span>
              <span>available for 2weeks stay</span>
            </p>
          </div>
          
        </div>
      </div>

  );
};

export default Card;
