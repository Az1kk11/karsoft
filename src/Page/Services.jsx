import React from 'react'
import { Container } from 'reactstrap'
import Button from '../assets/UI/Button/button'
import '../css/Services.css'
import aboutBac from '../assets/imags/EllipseAbout.png'

function Services() {
  return (
    <section className='about' id='services'>
      <Container>
        <div className="about-page">
          <div className="flex-box-card">
            <div className="cards mt-5">
              <div className="card" data-aos="fade-up-right">
                <div className="icon-box">
                  <i className="ri-pages-line"></i>
                </div>
                <h3>Web dasturlash</h3>
                <p>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</p>
              </div>
              <div className="card" data-aos="fade-up-right">
                <div className="icon-box">
                  <i className="ri-terminal-window-fill"></i>
                </div>
                <h3>Mobil dasturlash</h3>
                <p>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</p>
              </div>
            </div>
            <div className="cards">
              <div className="card" data-aos="fade-up-right">
                <div className="icon-box">
                  <i className="ri-edit-box-fill"></i>
                </div>
                <h3>UX/UI dizayn</h3>
                <ul>
                  <li>Website dizayn</li>
                  <li>Mobil dizayn</li>
                  <li>Dashboard dizayn</li>
                </ul>
              </div>
              <div className="card" data-aos="fade-up-right">
                <div className="icon-box">
                  <i className="ri-megaphone-fill"></i>
                </div>
                <h3>Marketing</h3>
                <p>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h4 data-aos="fade-left">XIZMATLARIMIZ</h4>
            <h3 data-aos="fade-left">Bizning xizmatlarimiz <br />O’z ichiga oladi.</h3>
            <p data-aos="fade-left">Morbi nibh adipiscing malesuada pharetra sodales est. Rhoncus sollicitudin et etiam a. Vitae ullamcorper sit magnis orci pellentesque ipsum tellus. Tempus sed id lectus lacus, integer purus, amet pulvinar vitae...</p>
            <Button/>
            <img src={aboutBac} alt="About" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services