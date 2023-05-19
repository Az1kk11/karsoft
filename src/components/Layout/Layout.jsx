import React from 'react'
import Header from '../Header/Header'
import { About, Cards, FeedbackSwiper, Home, Portfolio, Project, Services, Vacansy } from '../../Page'
import Footer from '../Footer/Footer'

function Layout() {

  return (
    <>
      <Header />
      <Home />
      <Cards />
      <About />
      <Services />
      <Portfolio />
      <FeedbackSwiper />
      <Vacansy />
      <Project />
      <Footer />
    </>
  )
}

export default Layout