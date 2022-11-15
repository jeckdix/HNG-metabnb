import React from 'react'
import classes from './Footer.module.css'
import assets from '../../utils/assets';
import { SlSocialTwitter, } from "react-icons/sl";
import { AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";





// const Footer = () => {
//   // const classNames = [classes['footer-container'], 'full-width-no-scroll'].join(' ');
//   return (

//     <footer className={classes.footerContainer}>
//       <div className={classes.footerLeft}>
//         <img src={assets.footerLogo} alt='metabnb' />
//         <div className={classes.socials}>
//           <div>
//             <FaFacebookF />
//           </div>
//           <div>
//             <AiOutlineInstagram />
//           </div>
//           <div>
//             <SlSocialTwitter />
//           </div>

//         </div>
//         <div className={classes.copyright}>    <p><AiOutlineCopyrightCircle /> 2022 Metabnb</p></div>
//       </div>
//       <div className={classes.footerRight}>
//         <div>
//           <h3>Community</h3>
//           <ul>
//             <li><a href='/'>NFT</a></li>
//             <li> <a href='/'>Token</a></li>
//             <li> <a href='/'>Landlords</a></li>
//             <li> <a href='/'>Discord</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3>Places</h3>
//           <ul>
//             <li><a href='/'>Castle</a></li>
//             <li> <a href='/'>Farms</a></li>
//             <li> <a href='/'>Beach</a></li>
//             <li> <a href='/'>Learn more</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3>About us</h3>
//           <ul>
//             <li><a href='/'>Road map</a></li>
//             <li> <a href='/'>Creators</a></li>
//             <li> <a href='/'>Careers</a></li>
//             <li> <a href='/'>Contact us</a></li>
//           </ul>
//         </div>

//       </div>

//     </footer>

//   )
// }

// export default Footer

const Footer = () => {
  // const classNames = [classes['footer-container'], 'full-width-no-scroll'].join(' ');
  return (

    <footer className={classes.footerContainer}>
      <div className={classes.footerLeft}>
        <img src={assets.footerLogo} alt='metabnb' />
        <div className={classes.socials}>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <AiOutlineInstagram />
          </div>
          <div>
            <SlSocialTwitter />
          </div>

        </div>
        <div className={classes.copyright}>    <p><AiOutlineCopyrightCircle /> 2022 Metabnb</p></div>
      </div>
      <div className={classes.footerRight}>
        <div>
          <h3>Community</h3>
          <ul>
            <li><a href='/'>NFT</a></li>
            <li> <a href='/'>Token</a></li>
            <li> <a href='/'>Landlords</a></li>
            <li> <a href='/'>Discord</a></li>
          </ul>
        </div>

        <div>
          <h3>Places</h3>
          <ul>
            <li><a href='/'>Castle</a></li>
            <li> <a href='/'>Farms</a></li>
            <li> <a href='/'>Beach</a></li>
            <li> <a href='/'>Learn more</a></li>
          </ul>
        </div>

        <div>
          <h3>About us</h3>
          <ul>
            <li><a href='/'>Road map</a></li>
            <li> <a href='/'>Creators</a></li>
            <li> <a href='/'>Careers</a></li>
            <li> <a href='/'>Contact us</a></li>
          </ul>
        </div>

      </div>

    </footer>

  )
}

export default Footer
