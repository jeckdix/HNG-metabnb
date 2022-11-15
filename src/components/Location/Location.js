import React from 'react'
import classes from './Location.module.css'

const Location = () => {
  return (
    <div className={classes['flex-container']}>
        <ul className='has-content-margin'>
            <li>Restaurants</li>
            <li> Cottage</li>
            <li> Castle</li>
            <li> Fantast city</li>
            <li> Beach</li>
            <li> Cabins</li>
            <li> Off-grid</li>
            <li> Farm</li>
        </ul>
        <input type='text' placeholder='Location' />
    </div>
  )
}

export default Location;