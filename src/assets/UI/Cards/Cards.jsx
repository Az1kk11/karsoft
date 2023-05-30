import { motion } from 'framer-motion'

import './Card.css'

function Cards({ projects }) {
    return (
        <div className="cards-img">
            {projects.map((item, index) => item.filtered === true ? (
                <div className="card-img" key={index} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="image-content">
                        <img src={item?.images[0]?.url} alt="Title" />
                    </div>
                    <div className="text-content">
                        <div className='card-title'>
                            <h3>{item.title}</h3>
                            <h5>{item.description}</h5>
                            <h5>{item.category_title}</h5>
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

