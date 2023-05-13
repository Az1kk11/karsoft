import React from 'react'
import { Container } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import '../assets/css/FeedbackSwiper.css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import slideLeft from '../assets/imags/avatar-left.png'
import slideRight from '../assets/imags/avatar-right.png'
import slideTop from '../assets/imags/slidetop.png'

import { A11y, Pagination, Autoplay } from 'swiper';

function FeedbackSwiper() {
    return (
        <section className='feedback'>
            <Container>
                <div className="feedback-swiper">
                    <h4>Feedback</h4>
                    <h3>Biz haqimizda nima deyishadi</h3>
                    <img src={slideLeft} alt="" className='slide-left' />
                    <img src={slideRight} alt="" className='slide-right' />
                    <img src={slideTop} alt="" className='slide-top' />
                    <Swiper
                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={true}
                    >
                        <SwiperSlide>
                            <p>Imperdiet tortor elit lacus venenatis nulla semper. Elementum nibh quis porta consequat, lacinia nunc a lacus, mattis. Cursus eu eget ridiculus at pellentesque in tempor arcu scelerisque. Eros tristique rhoncus blandit nulla rutrum pellentesque ut ac tellus. At blandit nunc nibh egestas lacinia massa magnis </p>
                            <div className="star-group">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h5>Abdulaziz Abdinazarov</h5>
                            <h6>Design group. Art direktor</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Imperdiet tortor elit lacus venenatis nulla semper. Elementum nibh quis porta consequat, lacinia nunc a lacus, mattis. Cursus eu eget ridiculus at pellentesque in tempor arcu scelerisque. Eros tristique rhoncus blandit nulla rutrum pellentesque ut ac tellus. At blandit nunc nibh egestas lacinia massa magnis </p>
                            <div className="star-group">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h5>Abdulaziz Abdinazarov</h5>
                            <h6>Design group. Art direktor</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Imperdiet tortor elit lacus venenatis nulla semper. Elementum nibh quis porta consequat, lacinia nunc a lacus, mattis. Cursus eu eget ridiculus at pellentesque in tempor arcu scelerisque. Eros tristique rhoncus blandit nulla rutrum pellentesque ut ac tellus. At blandit nunc nibh egestas lacinia massa magnis </p>
                            <div className="star-group">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h5>Abdulaziz Abdinazarov</h5>
                            <h6>Design group. Art direktor</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Imperdiet tortor elit lacus venenatis nulla semper. Elementum nibh quis porta consequat, lacinia nunc a lacus, mattis. Cursus eu eget ridiculus at pellentesque in tempor arcu scelerisque. Eros tristique rhoncus blandit nulla rutrum pellentesque ut ac tellus. At blandit nunc nibh egestas lacinia massa magnis </p>
                            <div className="star-group">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h5>Abdulaziz Abdinazarov</h5>
                            <h6>Design group. Art direktor</h6>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Imperdiet tortor elit lacus venenatis nulla semper. Elementum nibh quis porta consequat, lacinia nunc a lacus, mattis. Cursus eu eget ridiculus at pellentesque in tempor arcu scelerisque. Eros tristique rhoncus blandit nulla rutrum pellentesque ut ac tellus. At blandit nunc nibh egestas lacinia massa magnis </p>
                            <div className="star-group">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h5>Abdulaziz Abdinazarov</h5>
                            <h6>Design group. Art direktor</h6>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default FeedbackSwiper