import React from 'react'
import { Container } from 'reactstrap'
import Button from '../assets/UI/Button/button'
import '../css/Project.css'

function Project() {
  return (
    <section className='projects'>
      <Container>
        <div className="content-projects">
          <h3 data-aos="fade-right">Sizda biron bir loyihangiz bormi ?</h3>
          <h4 data-aos="fade-left">Uni professionallar ishoning!</h4>
          <Button />
        </div>
      </Container>
    </section>
  )
}

export default Project