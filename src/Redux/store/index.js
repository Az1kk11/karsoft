import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from '../slice/authSlice'
import VacansyReduser from '../slice/vacanciySlice'
import FeedbackReduser from '../slice/feedbackSlice'
import ProjectReduser from '../slice/projectSlice'
import CategorieReduser from '../slice/categorieSlice'

export default configureStore({
    reducer: {
        auth: AuthReduser,
        vacansy: VacansyReduser,
        feedback: FeedbackReduser,
        project: ProjectReduser,
        categorie: CategorieReduser
    },
    devTools: process.env.NODE_ENV !== 'production'
})