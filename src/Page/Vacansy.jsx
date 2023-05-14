import React from 'react'
import Button from '../assets/UI/Button/button'
import { Col, Container, Row } from 'reactstrap'
import vacansyImg from '../assets/imags/vacansy.png'
import vacansySircle from '../assets/imags/Ellipse.png'

import '../assets/css/Vacansy.css'

function Vacansy() {
    return (
        <section id='vacansy'>
            <Container>
                <Row>
                    <Col lg='6' className='d-flex justify-content-center flex-column'>
                        <h4>Vakansiya</h4>
                        {vacansy.length === 0 ? (
                            <h3>Hozirsha bizda bosh ish orinlari yoq</h3>
                        ) : (
                            <>
                                <p>Siz ham bizning jamoamizning tarkibida bo’lishingiz mumkin</p>
                                <ul>
                                    {vacansy.map((item, index) => (
                                        <li key={index}>
                                            <span></span>
                                            {item.display}
                                        </li>
                                    ))}
                                </ul>
                                <Button />
                            </>
                        )}
                    </Col>
                    <Col lg='6' className='d-flex justify-content-center justify-content-center'>
                        <div className="left-img-box">
                            <img src={vacansyImg} className='left-img' alt="" />
                        </div>
                        <img src={vacansySircle} className='vacansy-sircle' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Vacansy

const vacansy = [
    { display: 'Frontend developer' },
    { display: 'Backend developer' },
    { display: 'Python developer' },
    { display: 'UX/UI dizayner' },
    { display: 'Marketolog' },
    { display: 'Grafik dizayner' },
]