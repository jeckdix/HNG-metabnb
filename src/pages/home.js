import React from "react";
import { NavBar } from "../components/NavBar/index";
import classes from "./home.module.css";
import frontPageImg from "../Assets/front-page-img.png";
import mbbroken from "../Assets/mbbroken.png";
import metamask from "../Assets/metamask.png";
import opensea from "../Assets/opensea.png";
import { Card } from "../components/Card/index";
import frame1 from "../Assets/adventures/frame151.png";
import frame2 from "../Assets/adventures/frame152.png";
import frame3 from "../Assets/adventures/frame153.png";
import frame4 from "../Assets/adventures/frame154.png";
import frame5 from "../Assets/adventures/frame155.png";
import frame6 from "../Assets/adventures/frame156.png";
import frame7 from "../Assets/adventures/frame157.png";
import frame8 from "../Assets/adventures/frame158.png";
import metabnbNFT from "../Assets/metabnb-nft.png";
import { Footer } from "../components/footer";

const imageFiles = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8];

export const Home = () => {
  return (
    <div className={classes.container}>
      <NavBar />
      <main>
        <div className={classes["front-page"]}>
          <div className={classes["header-content"]}>
            <div>
              <h1>
                {" "}
                Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
              </h1>
            </div>

            <div>
              <p>
                We provide you access to luxury and affordable houses in the metaverse, get a chance
                to turn your imagination to reality at your comfort zone
              </p>
            </div>

            <div className={classes.search}>
              <input type="text" placeholder="Search for location" />
              <button> search</button>
            </div>
          </div>

          <div className={classes.image}>
            <img src={frontPageImg} alt="front Page" />
          </div>
        </div>
        <div className={classes["supported-platforms"]}>
          <img src={mbbroken} alt="mbbroken" />
          <img src={metamask} alt="metamask" />
          <img src={opensea} alt="opensea" />
        </div>

          <div className={classes["nft-sample-page"]}>
            <h2> Inspiration for your next adventure</h2>
            <div className={classes["nft-samples"]}>
              {imageFiles.map((imageName) => (
                <Card src={imageName} />
              ))}
            </div>
          </div>
        <div className={classes["about-container"]}>
          <div>
            <img src={metabnbNFT} alt="metabnb NFT" />
          </div>
          <div>
            <h1> Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which
              are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive
              services.
            </p>
            <div className={classes["learn-more"]}>
              <a href="/">Learn more</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
