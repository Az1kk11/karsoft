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
        }
    }
})

export const {
    feedbackStart,
    feedbackSuccess,
    feedbackFailure
} = feedbackSlice.actions

export default feedbackSlice.reducer