import React from 'react'
import { LeftNavbar } from '../page'
import Routers from '../../Routers/routers'

import './layouts.css'
import { useLocation } from 'react-router-dom'

function  Layouts() {
  const location = useLocation()
  return (
    <section className='admin-box'>
      { location.pathname.startsWith('/admin-login') ? '' : <LeftNavbar /> }
      <Routers />
    </section>
  )
}

export default Layouts