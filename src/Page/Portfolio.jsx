import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { projectStart, projectSuccess } from '../Redux/slice/projectSlice'
import ProjectServices from '../Redux/services/projects'
import CategoriesServices from '../Redux/services/category'

import { categoriesStart, categoriesSuccess } from '../Redux/slice/categorieSlice'
import { Container } from 'reactstrap'
import { motion } from 'framer-motion'

import Cards from '../assets/UI/Cards/Cards'

import '../css/Portfolio.css'

function Portfolio() {
    const dispatch = useDispatch()
    const { project, isLoading } = useSelector(state => state.project)
    const { categories } = useSelector(state => state.categorie)
    const [filter, setFilter] = useState('Martketing')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([])
        const filtered = project.map(p => ({
            ...p, filtered: p.category_title.includes(filter)
        }));
        setProjects(filtered)
    }, [project, filter])

    const getCategories = async () => {
        dispatch(categoriesStart())
        try {
            const response = await CategoriesServices.categoriesData()
            dispatch(categoriesSuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    const getProject = async () => {
        dispatch(projectStart())
        try {
            const response = await ProjectServices.projectsData()
            dispatch(projectSuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProject()
        getCategories()
    }, [])

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
                            {categories.map((item, index) => (
                                <motion.li
                                    data-aos="fade-up"
                                    className={filter === item.title ? 'active' : ''}
                                    onClick={() => setFilter(item.title)}
                                    whileTap={{ scale: 0.9 }}
                                    key={index}
                                >{item.title}</motion.li>
                            ))}
                        </ul>
                    </div>
                    {isLoading ? (
                        <h3 className='text-center mt-5 mb-5'>Loading...</h3>
                    ):(
                        <Cards projects={projects} />
                    )}
                </div>
            </Container>
        </section>
    )

}

export default Portfolio
