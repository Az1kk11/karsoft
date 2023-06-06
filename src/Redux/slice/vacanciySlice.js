import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    vacansy: [],
    error: null
}

export const vacansySlice = createSlice({
    name: 'vacansy',
    initialState,
    reducers: {
        vacansyStart: state => {
            state.isLoading = true
        },
        vacansySuccess: (state, action) => {
            state.isLoading = false
            state.vacansy = action.payload
        },
        vacansyFailure : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        postVacansyStart: state => {
            state.isLoading = true
        },
        postVacansySuccess: state => {
            state.isLoading = false
        },
        postVacansyFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },
    }
})

export const {
    vacansyStart,
    vacansySuccess,
    vacansyFailure,

    postVacansyStart,
    postVacansySuccess,
    postVacansyFailure
} = vacansySlice.actions

export default vacansySlice.reducer