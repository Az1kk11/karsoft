import React from 'react'
import Header from '../Header/Header'
import { About, Cards, FeedbackSwiper, Home, Portfolio, Services } from '../../Page'
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
    </>
  )
}

export default Layout