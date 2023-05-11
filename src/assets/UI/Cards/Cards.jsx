import React from 'react'
import './Card.css'
import { motion } from 'framer-motion'

function Cards({ projects }) {
    return (
        <div className="cards-img">
            {projects.map((item, index) => item.filtered === true ? (
                <div className="card-img" key={index}>
                    <div className="image-content">
                        <img src={item.img} alt="Title" />
                    </div>
                    <div className="text-content">
                        <div className='card-title'>
                            <h3>{item.title}</h3>
                            <h5>{item.description}</h5>
                        </div>
                        <motion.div whileTap={{ scale: 0.9 }} className="icon-card">
                            <i className="ri-arrow-right-up-line"></i>
                        </motion.div>
                    </div>
                </div>
            ) : (''))}
        </div>
    )
}

export default Cards

