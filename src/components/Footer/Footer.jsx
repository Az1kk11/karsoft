import React from 'react'
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
                        <li>
                            Home
                        </li>
                        <li>
                            Biz haqimizda
                        </li>
                        <li>
                            Xizmatlarimiz
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Vakansiya
                        </li>
                    </ul>
                    <ul data-aos="fade-right">
                        <li className='title'>Bizning manzil:</li>
                        <li>Qoraqalpog’iston Respublikasi Nukus shahri.</li>
                        <li className='icon-footer'>
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-telegram-fill"></i>
                            <i class="ri-facebook-box-fill"></i>
                            <i class="ri-linkedin-box-fill"></i>
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