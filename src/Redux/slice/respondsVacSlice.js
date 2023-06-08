import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    responVacan: [],
    responDetail: [],
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
            state.responVacan = action.payload
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
        
        getResponDetailStart: state => {
            state.isLoading = true
        },
        getResponDetailSuccess: (state, action) => {
            state.isLoading = false
            state.responDetail = action.payload
        },
        getResponDetailFailure: (state, action) => {
            state.isLoading = false
        },
    }
})

export const {
    responVacanStart,
    responVacanSuccess,
    responVacanFailure,

    postresponVacanStart,
    postresponVacanSuccess,
    postresponVacanFailure,

    getResponDetailStart,
    getResponDetailSuccess,
    getResponDetailFailure

} = responVacanSlice.actions

export default responVacanSlice.reducer