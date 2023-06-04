import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { feedbackFailure, feedbackStart, feedbackSuccess } from '../../../Redux/slice/feedbackSlice'
import FeedbackServices from '../../../Redux/services/feedback'

import { Button, Col, Container, Row, Table } from 'reactstrap'
import { toast } from 'react-toastify'

import '../../css/feedback.css'

function Feedback() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { feedback, isLoading } = useSelector(state => state.feedback)

    const getFeedback = async () => {
        dispatch(feedbackStart())
        try {
            const response = await FeedbackServices.feedbackData()
            dispatch(feedbackSuccess(response.data))
        } catch (error) {
            console.log(error);
            dispatch(feedbackFailure())
        }
    }

    const feedbackDelete = async id => {
        dispatch(feedbackStart())
        try {
            await FeedbackServices.feedbackDelete(id)
            getFeedback()
            toast.success('Feedback succesfuly deleted')
            dispatch(feedbackSuccess())
        } catch (error) {
            dispatch(feedbackFailure())
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getFeedback()
    }, [])

    return (
        <section className='feedback-page'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Row>
                            <Col lg='6'>
                                <h3 className='text-light'>Feedback</h3>
                            </Col>
                            <Col lg='6'>
                                <h4 className='add-feedback' onClick={() => navigate('/admin/feedback/create')}>
                                    Create feedback
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
                                    <th>Title</th>
                                    <th>Text</th>
                                    <th>Rating</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {isLoading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <tbody className='text-light'>
                                    {feedback?.map(item => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.title}</td>
                                            <td className='text'>{item.text}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <Button
                                                    color='danger'
                                                    onClick={() => feedbackDelete(item.id)}
                                                >
                                                    {isLoading ? 'Deleting...' : 'Delete'}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Feedback