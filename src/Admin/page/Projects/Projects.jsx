import React, { useEffect } from 'react'
import '../../css/projects.css'
import { Col, Container, Row, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { projectStart, projectSuccess } from '../../../Redux/slice/projectSlice'
import ProjectServices from '../../../Redux/services/projects'
import { useNavigate } from 'react-router-dom'

function Projects() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { project, isLoading } = useSelector(state => state.project)

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
    }, [])

    return (
        <section className='projects-page'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Row>
                            <Col lg='6'>
                                <h3 className='text-light'>Projects</h3>
                            </Col>
                            <Col lg='6'>
                                <h4 className='add-projects' onClick={() => navigate('/admin/projects/create') }>
                                    Create project
                                    <i className="ri-folder-add-fill p-3"></i>
                                </h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='12'>
                        <Table
                            className='mt-4'
                        >
                            <thead>
                                <tr className='text-light'>
                                    <th>Id</th>
                                    <th>Category id</th>
                                    <th>Category title</th>
                                    <th>Description</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody className='text-light'>
                                {project.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.category_id}</td>
                                        <td>{item.category_title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects