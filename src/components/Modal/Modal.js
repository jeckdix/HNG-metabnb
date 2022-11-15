import React, { useRef } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import metamask from "../../assets/metamask-s.png";
import walletconnect from "../../assets/walletconnect.png";

export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className={classes.modal}>
        <div>
          <h3> Connect Wallet</h3>
          <button onClick={() => setShowModal(false)}>X</button>
          <div className={classes["connect-div"]}>  </div>
        </div>
        <div>
          <p>choose your preferred network:</p>
        </div>
        <div className={classes.wallet}>
          <div className={classes["wallet-icon"]}>
            <div>
              <img src={metamask} alt="metamask" />
              <span> Metamask</span>
            </div>
            <div className={classes['greater-sign-container']}>
            <span className={classes.greater}>
              {/* <FaGreaterThan /> */}
            </span> 
            </div>

          </div>
        </div>
        <div className={classes.wallet}>
          <div className={classes["wallet-icon"]}>
            <div>
              <img src={walletconnect} alt="metamask" />
              <span> WalletConnect</span>
            </div>
            <div className={classes['greater-sign-container']}>
            <span className={classes.greater}>
              {/* <FaGreaterThan /> */}
            </span> 
            </div>

          </div>
        </div>

      </div>
    </div>,
    document.getElementById("portal")
  );
};
