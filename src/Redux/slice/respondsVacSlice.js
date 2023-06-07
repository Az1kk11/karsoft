import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    responVacan: [],
    error: null
}

export const responVacanSlice = createSlice({
    name: 'responVacan',
    initialState,
    reducers: {
        responVacanStart: state => {
            state.isLoading = true
        },
        responVacanSuccess: (state, action) => {
            state.isLoading = false
            state.feedback = action.payload
        },
        responVacanFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        postresponVacanStart: state => {
            state.isLoading = true
        },
        postresponVacanSuccess: state => {
            state.isLoading = false
        },
        postresponVacanFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },
    }
})

export const {
    responVacanStart,
    responVacanSuccess,
    responVacanFailure,

    postresponVacanStart,
    postresponVacanSuccess,
    postresponVacanFailure

} = responVacanSlice.actions

export default responVacanSlice.reducer