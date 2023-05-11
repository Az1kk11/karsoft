import React, { useEffect, useRef, useState } from 'react'
import { Container, Input } from 'reactstrap'
import logoImg from '../../assets/imags/karsoft.png'
import './Header.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Header() {
  const menuRef = useRef(null)
  const headerRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText('+998990010505')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  return (
    <header ref={headerRef}>
      <Container>
        <div className="nav-wrapper">
          <div className="logo">
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-50}
              duration={0}>
              <motion.img whileTap={{ scale: 0.9 }} src={logoImg} alt="Karsoft" />
            </Link>
          </div>
          <div className="navbar" ref={menuRef} onClick={menuToggle}>
            <ul>
              <div className="mobile-logo">
                <img src={logoImg} alt="Karsoft" />
              </div>
              {NavLinkName.map((item, index) => (
                <motion.li whileTap={{ scale: 0.9 }} key={index}>
                  <Link
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={0}
                    activeClass='active-nav-item'
                  >
                    {item.display}
                  </Link>
                </motion.li>
              ))}
              <li onClick={handleCopy} className='copy'>
                <span>
                  Copy
                  <i className="ri-file-copy-line"></i>
                </span>
                +998 (99) 001-05-05</li>
              <Input
                bsSize="sm"
                type="select"
                className='select'
              >
                <option value="" >UZ</option>
                <option value="" >RU</option>
                <option value="" >EN</option>
              </Input>
            </ul>
          </div>
          <div className="bars-box">
            <span onClick={menuToggle}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>

      </Container>
    </header>
  )
}


export default Header

const NavLinkName = [
  { display: 'Biz haqimizda', path: 'about', offset: 0 },
  { display: 'Xizmatlarimiz', path: 'services', offset: 0 },
  { display: 'Portfolio', path: 'portfolio', offset: 0 },
  { display: 'Vakansiyalar', path: 'vacancy', offset: 0 },
]