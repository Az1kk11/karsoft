import { configureStore } from "@reduxjs/toolkit";

import AuthReduser from '../slice/authSlice'
import VacansyReduser from '../slice/vacanciySlice'
import FeedbackReduser from '../slice/feedbackSlice'
import ProjectReduser from '../slice/projectSlice'
import CategorieReduser from '../slice/categorieSlice'
import ResponVacanReduser from '../slice/respondsVacSlice'

export default configureStore({
    reducer: {
        auth: AuthReduser,
        vacansy: VacansyReduser,
        feedback: FeedbackReduser,
        project: ProjectReduser,
        categorie: CategorieReduser,
        responVacan: ResponVacanReduser
    },
    devTools: process.env.NODE_ENV !== 'production'
})