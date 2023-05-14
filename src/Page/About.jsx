import React from 'react'
import '../css/About.css'
import { Col, Container, Row } from 'reactstrap'
import Button from '../assets/UI/Button/button'
import infoImg from '../assets/imags/Rectangle.png'
import ellipseImg from '../assets/imags/Ellipse.png'

function About() {
    return (
        <section className='info' id='about'>
            <Container>
                <Row className='box'>
                    <Col lg='6' className='d-flex flex-column'>
                        <h4>BIZ HAQIMIZDA</h4>
                        <h3>Zamonaviy axborot texnologiyalar biznesingizni rivojlantiradi !</h3>
                        <p>Morbi nibh adipiscing malesuada pharetra sodales est. Rhoncus sollicitudin et etiam a. Vitae ullamcorper sit magnis orci pellentesque ipsum tellus. Tempus sed id lectus lacus, integer purus, amet pulvinar vitae...</p>
                        <Button/>
                    </Col>
                    <Col lg='6'>
                        <div className="img-box">
                            <img src={infoImg} alt="Info"  />
                        </div>
                            <img src={ellipseImg} alt="Info" className='ellipse-img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About