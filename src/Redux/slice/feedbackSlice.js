import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    feedback: [],
    error: null
}

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        feedbackStart: state => {
            state.isLoading = true
        },
        feedbackSuccess: (state, action) => {
            state.isLoading = false
            state.feedback = action.payload
        },
        feedbackFailure : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        postFeedbackStart: state => {
            state.isLoading = true
        },
        postFeedbackSuccess: state => {
            state.isLoading = false
        },
        postFeedbackFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },
    }
})

export const {
    feedbackStart,
    feedbackSuccess,
    feedbackFailure,

    postFeedbackStart,
    postFeedbackSuccess,
    postFeedbackFailure
    
} = feedbackSlice.actions

export default feedbackSlice.reducer