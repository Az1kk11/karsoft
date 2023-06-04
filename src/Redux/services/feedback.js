import axios from "./api";

const FeedbackServices = {
    async feedbackData() {
        const { data } = await axios.get('/feedbacks')
        return data
    },
    async feedbackDelete(id) {
        const { data } = await axios.delete(`/feedbacks/${id}`)
        return data
    },
    async feedbackPost(feedback) {
        const { data } = await axios.post('/feedbacks', feedback)
        return data
    },
}
export default FeedbackServices