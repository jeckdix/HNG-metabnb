import React, {useState} from 'react';
import assets from '../../utils/assets';
import './NavBar.css';
import { Modal } from '../Modal';
import { Link } from 'react-router-dom';
import  { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  // const classNames = [classes.navBar, 'has-content-margin'].join(' ');
  return (
    <>

<nav className="navBar has-content-margin desktop-nav">
      <img className='logo' src={assets.logo} alt="logo" />
      <ul className='navList'>
        <li>
        <Link to='/'>Home</Link>
          {/* <a href="#test">Home</a> */}
        </li>
        <li>
        <Link to='/place-to-stay'>Place to stay</Link>
          {/* <a href="#test">Place to stay</a> */}
        </li>
        <li>
          <a href="#test">NFTs</a>
        </li>
        <li>
          <a href="#test">Community</a>
        </li>
      </ul>
      <div>
      <button onClick={openModal}> Connect wallet</button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>
    </nav>

    <nav className="navBar has-content-margin mobile-nav">
        <img className="logo" src={assets.logo} alt="logo" />
        <div>
          <FaBars onClick={toggleOpen} />          
          </div>
      </nav>
    <div className="mobile-menu" style={{display: `${!isMenuOpen ? 'none': 'flex'}`}}>
        <ul className="navList">
            <li>
            <Link to='/'>Home</Link>
              {/* <a href="/">Home</a> */}
            </li>
            <li>
            <Link to='/place-to-stay'>Place to stay</Link>
              {/* <a href="#test">Place to stay</a> */}
            </li>
            <li>
              <a href="#test">NFTs</a>
            </li>
            <li>
              <a href="#test">Community</a>
            </li>
            <li>
              <button onClick={openModal}>Connect wallet</button>
              {showModal ? <Modal setShowModal={setShowModal} /> : null}
            </li>
          </ul>
  
      </div>


    </>
  );
};

export default NavBar;
