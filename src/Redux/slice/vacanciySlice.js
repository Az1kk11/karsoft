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
        }
    }
})

export const {
    vacansyStart,
    vacansySuccess,
    vacansyFailure
} = vacansySlice.actions

export default vacansySlice.reducer