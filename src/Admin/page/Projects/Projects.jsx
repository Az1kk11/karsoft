import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProjectServices from '../../../Redux/services/projects'
import CategoriesServices from '../../../Redux/services/category'

import { projectStart, postProjectFailure, postProjectStart, projectSuccess } from '../../../Redux/slice/projectSlice'
import { categoriesFailure, categoriesStart, categoriesSuccess, postCategorieSuccess } from '../../../Redux/slice/categorieSlice'

import { toast } from 'react-toastify'

import { Button, Container, Form, FormGroup, Input, Table, } from 'reactstrap'
import '../../css/projects.css'

const thead = [
    { name: 'ID' },
    { name: 'Category ID' },
    { name: 'Category title' },
    { name: 'Title' },
    { name: 'Description' },
    { name: 'Action' },
]

function Projects() {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categorie)
    const { project, isLoading } = useSelector(state => state.project)
    const [values, setValues] = useState({
        category_id: '',
        title: '',
        description: '',
        images: null
    })

    const getProject = async () => {
        dispatch(projectStart())
        try {
            const response = await ProjectServices.projectsData()
            dispatch(projectSuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }

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
    useEffect(() => {
        getProject()
        getCategories()
    }, [])


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
            getProject()
        } catch (error) {
            dispatch(postProjectFailure())
            toast.error(error.response.data.message)
        }
    }

    const onChangeValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onChangeImg = e => {
        setValues({ ...values, images: e.target.files[0] })
    }

    const deleteHandler = async id => {
        try {
            await ProjectServices.projectsDelete(id)
            getProject()
            toast.success('Categorie succesfuly deleted')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className='projects-page'>
            <Container>
                <h3 className='text-light'>Project create</h3>
                <Form className='mt-1' onSubmit={handleSubmit}>
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
                        className='mb-3'
                    >
                        {isLoading ? 'Loading...' : 'Create'}
                    </Button>
                </Form>
                <div className="table-project">
                    <Table
                        className='mt-4'
                    >
                        <thead>
                            <tr className='text-light'>
                                {thead?.map((item, index) => (
                                    <th key={index}>{item?.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='text-light'>
                            {project?.map(item => (
                                <tr key={item?.id}>
                                    <th>{item?.id}</th>
                                    <th>{item?.category_id}</th>
                                    <th>{item?.category_title}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.description}</td>
                                    <td>
                                        <Button
                                            color='danger'
                                            className='p-1'
                                            onClick={() => deleteHandler(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </section>
    )
}

export default Projects