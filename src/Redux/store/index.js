import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from '../slice/authSlice'
import VacansyReduser from '../slice/vacanciySlice'
import FeedbackReduser from '../slice/feedbackSlice'

export default configureStore({
    reducer: {
        auth: AuthReduser,
        vacansy: VacansyReduser,
        feedback: FeedbackReduser
    },
    devTools: process.env.NODE_ENV !== 'production'
})