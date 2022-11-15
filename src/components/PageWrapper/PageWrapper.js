import React from 'react'
import classes from './PageWrapper.module.css';


const PageWrapper = ({ children }) => {
  return (
    <div className={classes['page-wrapper']}>{children}</div>
  )
}

export default PageWrapper;
