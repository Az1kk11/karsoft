import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import vacansyServices from '../../../Redux/services/vacansy'
import { postVacansyFailure, postVacansyStart, postVacansySuccess, vacansyStart, vacansySuccess } from '../../../Redux/slice/vacanciySlice'

import { Button, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { toast } from 'react-toastify'

import '../../css/Vacancy.css'

const theadName = [
    { name: 'ID' },
    { name: 'Title' },
    { name: 'Description' },
    { name: 'Action' },
]

function Vacansy() {
    const dispatch = useDispatch()
    const { vacansy, isLoading } = useSelector(state => state.vacansy)
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const getVacansy = async () => {
        dispatch(vacansyStart())
        try {
            const response = await vacansyServices.vacansyData()
            dispatch(vacansySuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVacansy()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        getVacansy()
        const vacancies = new FormData()
        vacancies.set('title', values.title)
        vacancies.set('description', values.description)
        dispatch(postVacansyStart())
        try {
            await vacansyServices.vacansyPost(vacancies)
            toast.success('Vacancie succesfuly created')
            dispatch(postVacansySuccess())
        } catch (error) {
            dispatch(postVacansyFailure())
            toast.error(error.response.data.message)
        }
    }

    const onChangeValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const deleteHandler = async id => {
        try {
            await vacansyServices.vacansyDelete(id)
            getVacansy()
            toast.success('Vacancies succesfuly deleted')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className='vacancy-page'>
            <Container>
                <h3 className='text-light mb-3'>Vacansy</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label className='text-light'>Title</Label>
                        <Input
                            type='text'
                            placeholder='Title'
                            name='title'
                            onChange={onChangeValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className='text-light'>Description</Label>
                        <Input
                            type='text'
                            name='description'
                            placeholder='Description'
                            onChange={onChangeValue}
                        />
                    </FormGroup>
                    <Button color='success' className='mb-3' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Create'}
                    </Button>
                </Form>
                <div className="table-vacancy">
                    <Table
                        className='mt-4'
                    >
                        <thead>
                            <tr className='text-light'>
                                {theadName?.map((item, index) => (
                                    <th key={index}>{item?.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='text-light'>
                            {vacansy?.map(item => (
                                <tr key={item?.id}>
                                    <th>{item?.id}</th>
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

export default Vacansy