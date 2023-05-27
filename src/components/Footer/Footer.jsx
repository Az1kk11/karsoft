import { NavLink } from 'react-router-dom'

import { Link } from 'react-scroll'
import { Container } from 'reactstrap'
import { motion } from 'framer-motion'

import logo from '../../assets/imags/logo-shorny.png'

import './Footer.css'

function Footer() {
    return (
        <section id='footer'>
            <Container>
                <div className="footer-page">
                    <ul className='left-1' data-aos="fade-right">
                        <li>
                            <img src={logo} alt="Karsoft" />
                        </li>
                        <li>
                            <i className="ri-mail-fill"></i>
                            karsoft_group@gmail.com
                        </li>
                        <li>
                            <i className="ri-phone-fill"></i>
                            +998 (99) 001-05-05
                        </li>
                    </ul>
                    <ul data-aos="fade-right">
                        <li className='title'>Xizmatlarimiz</li>
                        <li>
                            Web dasturlash
                        </li>
                        <li>
                            Mobil dasturlash
                        </li>
                        <li>
                            UX/UI dizayn
                        </li>
                        <li>
                            Marketing
                        </li>
                    </ul>
                    <ul data-aos="fade-right">
                        <li className='title'>Biz haqimizda</li>
                        {NavLinkName.map((item, index) => (
                            <motion.li whileTap={{ scale: 0.9 }} key={index}>
                                <Link
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={0}
                                    className='nav-bottom'
                                >
                                    {item.display}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    <ul data-aos="fade-right">
                        <li className='title'>Bizning manzil:</li>
                        <li>Qoraqalpog’iston Respublikasi Nukus shahri.</li>
                        <li className='icon-footer'>
                            <NavLink to={'https://instagram.com/karsoftuz?igshid=MmJiY2I4NDBkZg=='} target='blank'>
                                <i className="ri-instagram-fill"></i>
                            </NavLink>
                            <NavLink to={'https://t.me/karsoftuz'} target='blank'>
                                <i className="ri-telegram-fill"></i>
                            </NavLink>
                            <i className="ri-facebook-box-fill"></i>
                            <i className="ri-linkedin-box-fill"></i>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="footer-bottom">
                <p>2020 Copyright all right reserved - Karsoft</p>
            </div>
        </section>
    )
}

export default Footer


const NavLinkName = [
    { display: 'Biz haqimizda', path: 'about', offset: 0 },
    { display: 'Xizmatlarimiz', path: 'services', offset: 0 },
    { display: 'Portfolio', path: 'portfolio', offset: 0 },
    { display: 'Vakansiyalar', path: 'vacansy', offset: 0 },
]