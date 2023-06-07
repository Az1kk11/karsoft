import React, { useEffect } from 'react'
import { LeftNavbar } from '../page'
import Routers from '../../Routers/routers'

import './layouts.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Layouts() {
  const { logedIn } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/categories')
    }
  }, [logedIn])
  

  return (
    <section className='admin-box'>
      {location.pathname.startsWith('/admin-login') ? '' : <LeftNavbar />}
      <Routers />
    </section>
  )
}

export default Layouts