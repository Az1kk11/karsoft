import React from 'react'
import Header from '../Header/Header'
import { About, Cards, Home, Portfolio, Services } from '../../Page'
function Layout() {

  return (
    <>
      <Header />
      <Home />
      <Cards/>
      <About/>
      <Services/>
      <Portfolio/>
    </>
  )
}

export default Layout