import React from "react";
import "./Location.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Location = () => {
  return (
    <div className='location-container'>
      <div>
        <button className="mobile-tablet-drop">Locations <span><MdOutlineArrowDropDown /></span></button>
      </div>

      <div className="flex-container">
        <ul className="mobile-view">
          <li> Restaurants</li>
          <li> Cottage</li>
          <li> Castle</li>
          <li> Fantast city</li>
          <li> Beach</li>
          <li> Cabins</li>
          <li> Off-grid</li>
          <li> Farm</li>
        </ul>
        <input type="text" placeholder="Location" />
      </div>
    </div>
  );
};

export default Location;
