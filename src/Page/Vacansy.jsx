import React, { useEffect } from 'react'

import Button from '../assets/UI/Button/button'
import { Col, Container, Row } from 'reactstrap'

import vacansyImg from '../assets/imags/vacansy.png'
import vacansySircle from '../assets/imags/Ellipse.png'
import { vacansyStart, vacansySuccess, vacansyFailure } from '../Redux/slice/vacanciySlice'
import vacansyServices from '../Redux/services/vacansy'
import { useDispatch, useSelector } from 'react-redux'
import '../css/Vacansy.css'

function Vacansy() {
    const dispatch = useDispatch()
    const { vacansy, isLoading } = useSelector(state => state.vacansy)
console.log(vacansy);
    const getVacansy = async () => {
        dispatch(vacansyStart)
        try {
            const response = await vacansyServices.vacansyData()
            dispatch(vacansySuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getVacansy()
    },[])

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
                                <Button />
                            </>
                        )}
                    </Col>
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

const vacansy = [
    { display: 'Frontend developer' },
    { display: 'Backend developer' },
    { display: 'Python developer' },
    { display: 'UX/UI dizayner' },
    { display: 'Marketolog' },
    { display: 'Grafik dizayner' },
]