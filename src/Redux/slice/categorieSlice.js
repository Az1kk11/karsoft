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
        categoriesFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        postCategorieStart: state => {
            state.isLoading = true
        },
        postCategorieSuccess: state => {
            state.isLoading = false
        },
        postCategorieFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },
    }
})

export const {
    categoriesStart,
    categoriesSuccess,
    categoriesFailure,

    postCategorieStart,
    postCategorieSuccess,
    postCategorieFailure
} = categoriesSlice.actions

export default categoriesSlice.reducer