import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    categories: [],
    error: null
}

export const categoriesSlice = createSlice({
    name: 'categorie',
    initialState,
    reducers: {
        categoriesStart: state => {
            state.isLoading = true
        },
        categoriesSuccess: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        },
        categoriesFailure : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {
    categoriesStart,
    categoriesSuccess,
    categoriesFailure
} = categoriesSlice.actions

export default categoriesSlice.reducer