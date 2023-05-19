import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import '../css/Portfolio.css'
import Cards from '../assets/UI/Cards/Cards'
import data from '../assets/manifest.json'
import { motion } from 'framer-motion'

function Portfolio() {
    const [filter, setFilter] = useState('website')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(data.cards)
    }, [])

    useEffect(() => {
        setProjects([])
        const filtered = data.cards.map(p => ({
            ...p, filtered: p.type.includes(filter)
        }));
        setProjects(filtered)
    }, [filter])

    return (
        <section id='portfolio'>
            <Container>
                <div className="portfolio-page">
                    <div className="top-content">
                        <div className="title">
                            <h4 data-aos="fade-right">Portfolio</h4>
                            <h3 data-aos="fade-right" 
                                data-aos-easing="ease-in-sine">Bizning ishlarimiz</h3>
                            <h2 data-aos="fade-right"
                                data-aos-easing="ease-in-sine">Galereya</h2>
                        </div>
                        <ul>
                            {category.map((item, index) => (
                                <motion.li
                                    data-aos="fade-up"
                                    className={filter === item.type ? 'active' : ''}
                                    onClick={() => setFilter(item.type)}
                                    whileTap={{ scale: 0.9 }}
                                    key={index}
                                >{item.display}</motion.li>
                            ))}
                        </ul>
                    </div>
                    <Cards projects={projects} />
                </div>
            </Container>
        </section>
    )

}

export default Portfolio

const category = [
    { display: 'Website', type: 'website' },
    { display: 'Apps', type: 'apps' },
    { display: 'Telegram bot', type: 'telegram-bot' },
    { display: 'UX/UI', type: 'ux/ui' },
    { display: 'Marketing', type: 'marketing' }
]