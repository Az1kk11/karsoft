import React from 'react'
import Header from '../Header/Header'
import { About, Cards, FeedbackSwiper, Home, Portfolio, Services, Vacansy } from '../../Page'
function Layout() {

  return (
    <>
      <Header />
      <Home />
      <Cards/>
      <About/>
      <Services/>
      <Portfolio/>
      <FeedbackSwiper/>
      <Vacansy/>
    </>
  )
}

export default Layout