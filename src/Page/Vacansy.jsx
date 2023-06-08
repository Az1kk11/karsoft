import React, { useEffect, useState } from 'react'

import { Col, Container, Form, Input, Label, Row } from 'reactstrap'

import vacansyImg from '../assets/imags/vacansy.png'
import vacansySircle from '../assets/imags/Ellipse.png'
import { vacansyStart, vacansySuccess } from '../Redux/slice/vacanciySlice'
import vacansyServices from '../Redux/services/vacansy'
import { useDispatch, useSelector } from 'react-redux'
import '../css/Vacansy.css'
import RespondsVacancyServices from '../Redux/services/respons'
import { postresponVacanStart, postresponVacanSuccess } from '../Redux/slice/respondsVacSlice'
import { toast } from 'react-toastify'
import SelectUI from '../assets/UI/select/selectUI'

function Vacansy() {
    const dispatch = useDispatch()

    const { vacansy, isLoading } = useSelector(state => state.vacansy)

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    const [selected, setSelected] = useState('Ish orinlari')
    const [selectValue, setSelectValue] = useState()
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
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
        dispatch(postresponVacanStart())
        const responsVacansy = new FormData()

        responsVacansy.set('vacancy_id', selectValue)
        responsVacansy.set('name', values.name)
        responsVacansy.set('phone', values.phone)
        responsVacansy.set('email', values.email)
        responsVacansy.set('text', selected)

        try {
            await RespondsVacancyServices.postRespondsVacancy(responsVacansy)
            dispatch(postresponVacanSuccess())
            toast.success('Biz siz bilan tez orada bog`lanamiz')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const onChangeValue = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <section id='vacansy'>
            <Container>
                <Row>
                    <Col lg='6' className='d-flex justify-content-center flex-column'>
                        <h4 data-aos="fade-right">Vakansiya</h4>
                        {vacansy.length === 0 ? (
                            <h3 data-aos="fade-right">Hozirsha bizda bosh ish orinlari yoq</h3>
                        ) : (
                            <>
                                <p data-aos="fade-right">Siz ham bizning jamoamizning tarkibida bo’lishingiz mumkin</p>
                                <ul data-aos="fade-right">
                                    {vacansy.map((item, index) => (
                                        <li key={index}>
                                            <span></span>
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                                <button className='btn btn-success' onClick={toggle}>
                                    Bog'lanish
                                    <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </>
                        )}
                    </Col>

                    <div className="respons-vacansy" style={{ display: open ? 'block' : 'none' }}>

                        <div className="d-flex justify-content-between">
                            <p>Biz siz bilan boglanamiz</p>
                            <i onClick={toggle} className="ri-close-line"></i>
                        </div>

                        <Form onSubmit={handleSubmit}>

                            <Label className='text-light' >Name</Label>
                            <Input type="text" name='name'
                                onChange={onChangeValue}
                            />

                            <Label className='text-light' >Phone</Label>
                            <Input type="text" name='phone'
                                onChange={onChangeValue}
                            />

                            <Label className='text-light' >Email</Label>
                            <Input type='email' name='email'
                                onChange={onChangeValue}
                            />

                            <SelectUI
                                option={vacansy}
                                selected={selected}
                                setSelected={setSelected}
                                setSelectValue={setSelectValue}
                            />

                            <button type='submit' className='btn btn-success'>
                                {isLoading ? 'Loading...' : 'Xabar qoldirish'}
                            </button>

                        </Form>
                    </div>

                    <Col lg='6' className='d-flex justify-content-center justify-content-center'>
                        <div className="left-img-box">
                            <img src={vacansyImg} className='left-img' alt="" data-aos="fade-left" />
                        </div>
                        <img src={vacansySircle} className='vacansy-sircle' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Vacansy
