import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import '../../css/feedback.css'
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react'
import FeedbackServices from '../../../Redux/services/feedback'
import { useDispatch, useSelector } from 'react-redux'
import { postFeedbackStart, postFeedbackSuccess } from '../../../Redux/slice/feedbackSlice'
import { toast } from 'react-toastify'

function FeedbackCreate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTilte] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')
    const { isLoading } = useSelector(state => state.feedback)

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
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className='feedback-page'>
            <Container>
                <h3 className='text-light mt-3 mb-5 home-feedback'>
                    <span onClick={() => navigate('/admin/feedback')}>
                        Feedback
                    </span>
                    - create
                </h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label className='text-light'>Title</Label>
                        <Input
                            name="title"
                            type="text"
                            value={title}
                            onChange={e => setTilte(e.target.value)}
                            required
                        />
                        <Label className='text-light'>Text</Label>
                        <Input
                            name="text"
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                        />
                        <Label className='text-light'>Name</Label>
                        <Input
                            name="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <h6 className='text-light'>Rating</h6>
                    <Rating
                        name="hover-feedback"
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <Button type='submit' className='d-block mt-3'>
                        {isLoading ? 'Creting...' : 'Create' }
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default FeedbackCreate