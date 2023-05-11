import React from 'react'
import '../assets/css/Home.css'
import { Container } from 'reactstrap'
import Button from '../assets/UI/Button/button'
import { motion } from 'framer-motion'
function Home() {
  return (
    <section className='home' id='home'>
      <Container>
        <div className="d-flex align-items-flex-start flex-column">
          <p>Morbi nibh adipiscing malesuada pharetra sodales est.</p>
          <div className="d-flex ">
            <Button />
            <motion.button whileTap={{ scale: 0.9 }} className='btn-play'>
              Video
              <span><i className="ri-play-fill"></i></span>
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Home