import axios from "./api";

const FeedbackServices = {
    async feedbackData() {
        const { data } = await axios.get('/feedbacks')
        return data
    }
}
export default FeedbackServices