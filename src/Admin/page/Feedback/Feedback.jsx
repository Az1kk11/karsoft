import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { feedbackFailure, feedbackStart, feedbackSuccess, postFeedbackStart, postFeedbackSuccess } from '../../../Redux/slice/feedbackSlice'
import FeedbackServices from '../../../Redux/services/feedback'

import { toast } from 'react-toastify'

import { Button, Col, Container, Form, Input, Label, Row, Table } from 'reactstrap'

import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material'

import '../../css/feedback.css'

function Feedback() {
    const dispatch = useDispatch()
    const { feedback, isLoading } = useSelector(state => state.feedback)
    const [title, setTilte] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')

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

    const handleSubmit = async e => {
        e.preventDefault()

        const feedback = new FormData()
        feedback.set('title', title)
        feedback.set('text', text)
        feedback.set('rating', rating)
        feedback.set('name', name)

        dispatch(postFeedbackStart())
        try {
            await FeedbackServices.feedbackPost(feedback)
            dispatch(postFeedbackSuccess())
            toast.success('Feedback succesfuly created')
            getFeedback()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const feedbackDelete = async id => {
        dispatch(feedbackStart())
        try {
            await FeedbackServices.feedbackDelete(id)
            toast.success('Feedback succesfuly deleted')
            getFeedback()
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
                <h3 className='text-light'>Feedback</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg='6'>
                            <Label className='text-light'>Title</Label>
                            <Input
                                name="title"
                                type="text"
                                value={title}
                                onChange={e => setTilte(e.target.value)}
                                required
                            />
                        </Col>
                        <Col lg='6'>
                            <Label className='text-light'>Text</Label>
                            <Input
                                name="text"
                                type="text"
                                value={text}
                                onChange={e => setText(e.target.value)}
                                required
                            />
                        </Col>
                        <Col lg='6' className='mt-2'>
                            <Label className='text-light mt-1'>Name</Label>
                            <Input
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </Col>
                        <Col lg='6'>
                            <h6 className='text-light mt-3'>Rating</h6>
                            <Rating
                                name="hover-feedback"
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </Col>
                    </Row>
                    <Button type='submit' className='d-block mt-3'>
                        {isLoading ? 'Creting...' : 'Create'}
                    </Button>
                </Form>
                <div className="table-feedback">
                    <Table
                        className='mt-4'
                    >
                        <thead>
                            <tr className='text-light'>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Text</th>
                                <th>Rating</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className='text-light'>
                            {feedback?.map(item => (
                                <tr key={item?.id}>
                                    <th>{item?.id}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.rating}</td>
                                    <td>{item?.name}</td>
                                    <td>
                                        <Button
                                            color='danger'
                                            className='p-1'
                                            onClick={() => feedbackDelete(item.id)}
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

export default Feedback