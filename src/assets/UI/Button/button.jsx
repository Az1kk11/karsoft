import React from 'react'
import { motion } from 'framer-motion'
import './button.css'

function Button() {
  return (
    <motion.button whileTap={{ scale: 0.9 }} className='btn-success'>
        Bog'lanish
        <span><i className="ri-arrow-right-s-line"></i></span>
    </motion.button>
  )
}

export default Button