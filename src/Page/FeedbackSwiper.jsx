import React, { useEffect } from 'react'

import { Container } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import '../css/FeedbackSwiper.css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css';

import slideLeft from '../assets/imags/avatar-left.png'
import slideRight from '../assets/imags/avatar-right.png'
import slideTop from '../assets/imags/slidetop.png'

import { A11y, Pagination, Autoplay } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { feedbackStart, feedbackSuccess } from '../Redux/slice/feedbackSlice'
import FeedbaskServices from '../Redux/services/feedback'
import { Rating } from '@mui/material';

function FeedbackSwiper() {
    const dispatch = useDispatch()
    const { feedback, isLoading } = useSelector(state => state.feedback)

    const getFeedback = async () => {
        dispatch(feedbackStart())
        try {
            const response = await FeedbaskServices.feedbackData()
            dispatch(feedbackSuccess(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getFeedback()
    }, [])

    return (
        <section className='feedback'>
            <Container>
                <div className="feedback-swiper">
                    <h4 data-aos="fade-up">Feedback</h4>
                    <h3 data-aos="fade-up">Biz haqimizda nima deyishadi</h3>
                    <img src={slideLeft} alt="" className='slide-left' data-aos="fade-right" />
                    <img src={slideRight} alt="" className='slide-right' data-aos="fade-left" />
                    <img src={slideTop} alt="" className='slide-top' />
                    {isLoading ? (
                        <h3 className='text-light'>Loading...</h3>
                    ) : (
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={true}
                        >
                            {feedback.map(item => (
                                <SwiperSlide key={item.id}>
                                    <p>{item.text}</p>
                                    <Rating
                                        value={item.rating}
                                        className='mt-2 mb-2'
                                    />
                                    <h5>{item.name}</h5>
                                    <h6>{item.title}</h6>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default FeedbackSwiper