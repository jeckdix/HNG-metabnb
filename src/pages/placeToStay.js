import React from 'react'

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Location from '../components/Location/Location';
import PlaceComponent from '../components/PlaceComponent/PlaceComponent';

// const PlaceComponent = React.lazy(() => import('../components/PlaceComponent/PlaceComponent'));



const PlaceToStay = () => {
  return (
        <PageWrapper>
        <NavBar />
        <Location />
        <PlaceComponent />
        <Footer />
        </PageWrapper>

  )
}

export default PlaceToStay;
