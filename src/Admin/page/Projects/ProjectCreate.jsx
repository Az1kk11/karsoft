import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import '../../css/projects.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesFailure, categoriesStart, categoriesSuccess, postCategorieSuccess } from '../../../Redux/slice/categorieSlice'
import CategoriesServices from '../../../Redux/services/category'
import { toast } from 'react-toastify'
import { postProjectFailure, postProjectStart } from '../../../Redux/slice/projectSlice'
import ProjectServices from '../../../Redux/services/projects'

function ProjectCreate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categorie)
    const { isLoading } = useSelector(state => state.project)
    const [values, setValues] = useState({
        category_id: '',
        title: '',
        description: '',
        images: null
    })

    const getCategories = async () => {
        dispatch(categoriesStart())
        try {
            const response = await CategoriesServices.categoriesData()
            dispatch(categoriesSuccess(response.data))
        } catch (error) {
            dispatch(categoriesFailure(error))
            toast.error(error.response.data.message)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const project = new FormData()
        project.set('category_id', values.category_id)
        project.set('title', values.title)
        project.set('description', values.description)
        project.set('image', values.images)
        dispatch(postProjectStart())
        try {
            await ProjectServices.projectsPost(project)
            dispatch(postCategorieSuccess())
            toast.success('Project succesfuly created')
        } catch (error) {
            dispatch(postProjectFailure())
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const onChangeValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onChangeImg = e => {
        setValues({ ...values, images: e.target.files[0] })
    }

    return (
        <section className='projects-page'>
            <Container>
                <Row>
                    <Col lg='12' className='create'>
                        <h3 className='text-light'>
                            <span onClick={() => navigate('/admin/projects')} >Project </span>
                            - Create
                        </h3>
                    </Col>
                    <Col lg='12'>
                        <Form className='mt-4' onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    name="title"
                                    placeholder="Title"
                                    type="text"
                                    onChange={onChangeValue}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="description"
                                    placeholder="Description"
                                    type="text"
                                    onChange={onChangeValue}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="image"
                                    type="file"
                                    onChange={onChangeImg}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    bsSize="sm"
                                    className="mb-3"
                                    type="select"
                                    name='category_id'
                                    onChange={onChangeValue}
                                    required
                                >
                                    <option>Categories</option>
                                    {categories.map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <Button
                                color='success'
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : 'Create'}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectCreate