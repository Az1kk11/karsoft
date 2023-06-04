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
        projectFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        postProjectStart: state => {
            state.isLoading = true
        },
        postProjectSuccess: state => {
            state.isLoading = false
        },
        postProjectFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },
    }
})

export const {
    projectStart,
    projectSuccess,
    projectFailure,

    postProjectStart,
    postProjectSuccess,
    postProjectFailure,
    

} = projectSlice.actions

export default projectSlice.reducer