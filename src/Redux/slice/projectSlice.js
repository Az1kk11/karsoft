import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    project: [],
    error: null
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        projectStart: state => {
            state.isLoading = true
        },
        projectSuccess: (state, action) => {
            state.isLoading = false
            state.project = action.payload
        },
        projectFailure : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {
    projectStart,
    projectSuccess,
    projectFailure
} = projectSlice.actions

export default projectSlice.reducer